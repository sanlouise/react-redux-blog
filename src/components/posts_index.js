import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index'

export default class PostsIndex extends Component {

	componentWillMount() {
		this.props.fetchPosts();
		console.log('Should call action creator FETCH_POSTS')
	}
	render() {
		return (
			<div>All blog posts</div>
		);
	}
}

export default connect(null, { fetchPosts: fetchPosts })(PostsIndex)