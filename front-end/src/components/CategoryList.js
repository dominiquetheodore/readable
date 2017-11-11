import React from 'react'
import Category from './Category'

// renders category buttons
const CategoryList = ({ categories }) => (
  <ul>
    {categories.map(category => (
      <Category key={category.path} category={category} />
    ))}
  </ul>
)

export default CategoryList