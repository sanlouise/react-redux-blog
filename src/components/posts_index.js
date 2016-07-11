import React, { Component } from 'react';

class PostsIndex extends Component {
	componentWillMount() {
		console.log('Should call action creator FETCH_POSTS')
	}
	render() {
		return (
			<div>All blog posts</div>
		);
	}
}

export default PostsIndex;