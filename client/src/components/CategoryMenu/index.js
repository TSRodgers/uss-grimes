import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';

function CategoryMenu({ setCategory }) {
  const { data: categoryData } = useQuery(QUERY_CATEGORIES);
  const categories = categoryData?.categories || [];
  console.log(categories);
  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((category) => (
        <button
          key={category._id}
          onClick={() => {
            setCategory(category._id);
          }}
        >
          {category.name}
        </button>
      ))}
      <button onClick={() => {setCategory('')}}>All Photos</button>
    </div>
  );
}

export default CategoryMenu;