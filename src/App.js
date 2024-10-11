import LayoutContainer from './components/Layout/LayoutContainer';
import { DataProvider } from './context/DataContext';
import { ConfigProvider } from 'antd';


function App() {
  const customTheme = {
    components: {
      Tabs: {
        inkBarColor: "#61DAD6",
        itemActiveColor: "#61DAD6",
        itemSelectedColor: "#61DAD6"
      },
      Menu: {
        itemBorderRadius: 0,

      },
      Button: {
        defaultHoverBg: "#61DAD6"
      }
    }
  }
  return (
    <ConfigProvider theme={customTheme}>
      <DataProvider>
        <LayoutContainer />
      </DataProvider>
    </ConfigProvider>



  );
}

export default App;
