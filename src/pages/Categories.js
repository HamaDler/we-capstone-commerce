import React from 'react';
import ReactModal from '../components/ReactModal';
import Layout from '../layouts/MainLayout';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'test', label: 'Test Option' },
];

export default function Categories() {
  return (
    <Layout>
      <ReactModal />

      <Select options={options} />
    </Layout>
  );
}
