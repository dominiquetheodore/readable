const getAuthHeaders = () => {
  const headers = new Headers();
  headers.append('Authorization', 'xcx')
  headers.append('Content-Type', 'application/json')
  return headers
};

export const fetchCategories = () => {
  const options = { method: 'get', headers: getAuthHeaders() }
  return fetch('http://localhost:3001/categories', options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const fetchPosts = () => {
  const options = { method: 'get', headers: getAuthHeaders() }
  return fetch('http://localhost:3001/posts', options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const fetchPostsByCategory = (category) => {
  const options = { method: 'get', headers: getAuthHeaders() }
  return fetch('http://localhost:3001/'+category+'/posts', options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const fetchComments = (id) => {
  const options = { method: 'get', headers: getAuthHeaders() }
  return fetch('http://localhost:3001/posts/' + id + '/comments', options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const fetchPost = (id) => {
  const options = { method: 'get', headers: getAuthHeaders() }
  return fetch('http://localhost:3001/posts/'+id, options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const addPost = (post) => {
  const options = { method: 'post', body: JSON.stringify(post), headers: getAuthHeaders() }
  return fetch('http://localhost:3001/posts/', options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const addComment = (comment) => {
  const options = { method: 'post', body: JSON.stringify(comment), headers: getAuthHeaders() }
  return fetch('http://localhost:3001/comments/', options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}


export const editPost = (post) => {
  const options = { method: 'put', body: JSON.stringify(post), headers: getAuthHeaders() }
  return fetch('http://localhost:3001/posts/'+post.id, options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const editComment = (comment) => {
  const options = { method: 'put', body: JSON.stringify(comment), headers: getAuthHeaders() }
  return fetch('http://localhost:3001/comments/'+comment.id, options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const deletePost = (id) => {
  const options = { method: 'delete', body: id, headers: getAuthHeaders() }
  return fetch('http://localhost:3001/posts/'+id, options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const upvotePost = (id) => {
  const options = { method: 'post', body: JSON.stringify({option: 'upVote'}), headers: getAuthHeaders() }
  return fetch('http://localhost:3001/posts/'+id, options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const downvotePost = (id) => {
  const options = { method: 'post', body: JSON.stringify({option: 'downVote'}), headers: getAuthHeaders() }
  return fetch('http://localhost:3001/posts/'+id, options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const deleteComment = (id) => {
  const options = { method: 'delete', body: id, headers: getAuthHeaders() }
  return fetch('http://localhost:3001/comments/'+id, options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const upvoteComment = (id) => {
  const options = { method: 'post', body: JSON.stringify({option: 'upVote'}), headers: getAuthHeaders() }
  return fetch('http://localhost:3001/comments/'+id, options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}

export const downvoteComment = (id) => {
  const options = { method: 'post', body: JSON.stringify({option: 'downVote'}), headers: getAuthHeaders() }
  return fetch('http://localhost:3001/comments/'+id, options)
    .then(
      res => res.json()
    )
    .catch(err => console.error(err))
}