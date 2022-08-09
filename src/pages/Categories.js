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
  function handleUpload(e) {
    console.log('the uploaded file object is:', e.target.files);

    if (e.target.files.length > 4) {
      alert('you cannot upload more than 4 files');
    }
  }

  return (
    <Layout>
      <ReactModal />

      {/* <Select options={options} /> */}

      <input multiple type="file" name="file" onChange={handleUpload} />
    </Layout>
  );
}
