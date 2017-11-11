import React from 'react'
import PostContainer from '../containers/PostContainer'

const Cat = ({ category, posts }) => (
	<div>
		{posts.map(post => (
	        <PostContainer key={post.id} post={post} />
	     ))}
	</div>
)

export default Cat