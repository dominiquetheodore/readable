import * as api from '../utils/api';
import uuid from 'uuid';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const FETCH_POST = "FETCH_POST";
export const ADD_POST = "ADD_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS_BY_CATEGORY = "RECEIVE_POSTS_BY_CATEGORY";
export const EDIT_POST = "EDIT_POST";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_POST = "DELETE_POST";
export const DOWNVOTE_POST = "DOWNVOTE_POST";
export const UPVOTE_POST = "UPVOTE_POST";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const UPVOTE_COMMENT = "UPVOTE_COMMENT";
export const DOWNVOTE_COMMENT = "DOWNVOTE_COMMENT";

export function fetchCategories() {
    return {
      type: RECEIVE_CATEGORIES,
      payload: api.fetchCategories(),
    };
}

export const fetchPosts = posts => {
  return {
    type: RECEIVE_POSTS,
    payload: api.fetchPosts(),
  }
}

export function fetchPostsByCategory(category) {
    return {
      type: RECEIVE_POSTS_BY_CATEGORY,
      payload: api.fetchPostsByCategory(category),
    }
}


export function fetchComments(id) {
    return {
      type: RECEIVE_COMMENTS,
      payload: api.fetchComments(id),
    }
}

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export const sendPost = post => {
  post.id = uuid.v4()
  post.timestamp = Math.floor(Date.now())

  return {
    type: ADD_POST,
    payload: api.addPost(post)
  }
}

export const sendComment = comment => {
  comment.id = uuid.v4()
  comment.timestamp = Math.floor(Date.now())

  return {
    type: ADD_COMMENT,
    payload: api.addComment(comment)
  }
}

export const editPost = post => {
  post.timestamp = Math.floor(Date.now())

  return {
    type: EDIT_POST,
    payload: api.editPost(post)
  }
}

export const editComment = comment => {
  comment.timestamp = Math.floor(Date.now())

  return {
    type: EDIT_COMMENT,
    payload: api.editComment(comment)
  }
}

export const deletePost = post => {
  return {
    type: DELETE_POST,
    payload: api.deletePost(post)
  }
}

export const upvotePost = post => {
  return {
    type: UPVOTE_POST,
    payload: api.upvotePost(post)
  }
}

export const downvotePost = post => {
  return {
    type: DOWNVOTE_POST,
    payload: api.downvotePost(post)
  }
}

export const deleteComment = comment => {
  return {
    type: DELETE_COMMENT,
    payload: api.deleteComment(comment)
  }
}

export const upvoteComment = comment => {
  return {
    type: UPVOTE_COMMENT,
    payload: api.upvoteComment(comment)
  }
}

export const downvoteComment = comment => {
  return {
    type: DOWNVOTE_COMMENT,
    payload: api.downvoteComment(comment)
  }
}

export function fetchPost(id) {
  return {
    type: FETCH_POST,
    payload: api.fetchPost(id),
  }
}
