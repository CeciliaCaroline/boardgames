import React, { useContext, useState, useRef } from 'react';
import { DataContext } from "../../../context/DataContext";
import { Table, Spin, Input, Space, Button, Tooltip, Image } from 'antd';
import {
  QuestionCircleOutlined,
  CheckSquareTwoTone,
  PlusCircleFilled

} from '@ant-design/icons';
import moment from 'moment';
import { getFlag } from './flags';
import EditAction from '../../Edit/EditAction';


const CustomTable = () => {
  const [FilterText, setFilterText] = useState('');
  const { data, loading } = useContext(DataContext);
  const FilterInput = useRef(null);

  const handleFilter = (selectedKeys, confirm) => {
    confirm();
    setFilterText(selectedKeys[0]);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setFilterText('');
  };

  // Filter/filter properties for each column
  const getColumnFilterProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        className='p-2'
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={FilterInput}
          placeholder={`Filter ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleFilter(selectedKeys, confirm, dataIndex)}
          className='mb-2 block'
        />
        <Space>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            className='width-100'
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setFilterText(selectedKeys[0]);
              close();
            }}
          >
            Filter
          </Button>

        </Space>
      </div>
    ),

    // filter records based on Filter input
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),

  });

// Replace any missing 'bbg_rating' values ('-') with 0 for consistent data formatting
const newData = data.map((d) => {
    if (d['bbg_rating'] === '-') {
      d['bbg_rating'] = 0
    }
    return d

  })

  // define table columns
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <p>{text} </p>,
      sorter: (a, b) => a.name.length - b.name.length,
      defaultSortOrder: 'descend',
      ...getColumnFilterProps('name'),
    },
    {
      title: 'Publisher',
      dataIndex: 'publisher',
      key: 'publisher',
      render: (text) => <p>{text} </p>,
    },

    {
      title: 'Language',
      dataIndex: 'language',
      key: 'language',
      render: (text) => {
        let flag = getFlag(text)
        return <Image width={40} src={flag} />

      },
      filters: [{ text: "English", value: "ENG" }, { text: "Italian", value: "ITA" }, { text: "German", value: "DEU" }],
      onFilter: (value, record) => record.language.indexOf(value) === 0,
    },
    {
      title: () => <p>
        BGG Rating {" "}
        <Tooltip
          overlayClassName='max-w-max '
          placement='top'
          title="These ratings refer to user ratings available on the website boardgamegeek.com">
          <QuestionCircleOutlined />
        </Tooltip>
      </p>,
      dataIndex: 'bbg_rating',
      key: 'bbg_rating',
      render: (text) => <p>{text|| "-"}</p>,
      showSorterTooltip: {
        target: 'sorter-icon',
      },
      sorter: (a, b) => {
        return parseFloat(a['bbg_rating']) - parseFloat(b['bbg_rating'])
      },

    },
    {
      title: 'Expansion',
      dataIndex: 'expansion',
      key: 'expansion',
      render: (expand) => <>{expand && <CheckSquareTwoTone className='text-20' twoToneColor="#61DAD6" />}</>,
    },
    {
      title: 'N° players',
      dataIndex: ['min_players', 'max_players'],
      key: 'no. of players',
      render: (_, players) => <p>{`${players.min_players} - ${players.max_players}`} </p>,
    },
    {
      title: 'Playing Time',
      dataIndex: ['min_time', 'max_time'],
      key: 'playing_time',
      render: (_, time) => <p>{`${time.min_time} - ${time.max_time} `}min  </p>,
    },
    {
      title: 'Acquired',
      dataIndex: 'acquired',
      key: 'acquired',
      render: (text) => <p>{moment(text).format('DD/MM/YY')} </p>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, rowData) => <EditAction data={rowData} />,

    }
  ];

  return (
    <>
      {loading ? <Spin size='large' className='text-green' /> : <Table
        columns={columns}
        dataSource={newData || data}
        scroll={true}
        className='m-3'
        title={() => <p className='text-left text-green text-18'>My Collection <PlusCircleFilled className='text-green text-20' /></p>}

      />}
    </>

  )
}

export default CustomTable