import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const postID = this.props.params.postId;
    const i = this.props.posts.findIndex((post) => post.code === postID)
    const post = this.props.posts[i];
    const postComments = this.props.comments[postID] || [];
    console.log(postComments)
    return(
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
})

export default Single;