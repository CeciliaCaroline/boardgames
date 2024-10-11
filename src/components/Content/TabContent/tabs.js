import React from 'react';

import CustomTable from '../TableContent';

export const tabs = [
  {
    key: '1',
    label: 'New Releases',
    children: 'Coming Soon....',
  },
  {
    key: '2',
    label: 'My Collection',
    children: <CustomTable />

  },
  {
    key: '3',
    label: 'Backed on Kickstarter',
    children: 'Coming Soon....',
  },
];