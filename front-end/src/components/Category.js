import React from 'react'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'

// renders a category button
const Category = ({ category }) => (
  <Link to={'/'+ category.path}>
  	<RaisedButton label={category.name} />
  </Link>
)

export default Category