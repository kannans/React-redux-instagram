

// increatment action

export function increment(index) {
  return {
    type: "INCREMENT_LIKES",
    index: index
  }
}

// Add a comment

export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  }
}

// Remove a comment

export function removeComment(postId, i) {
  return {
    type: "REMOVE_COMMENT",
    i,
    postId
  }
}
