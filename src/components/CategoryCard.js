import React from 'react';

export default function CategoryCard({ title }) {
  return (
    <div className="bg-white rounded-md shadow-md text-center py-8">
      <p>{title}</p>
    </div>
  );
}
