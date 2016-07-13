import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostShow extends Component {
	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	render() {

		const post = this.props.post;

		if (!this.props.post) {
			return <div>Loading..</div>
		}

		return (
			<div>
				<h3>Title: {post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);