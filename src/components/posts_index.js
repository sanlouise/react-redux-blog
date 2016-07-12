import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

export default class PostsIndex extends Component {

	componentWillMount() {
		this.props.fetchPosts();
		console.log('Should call action creator FETCH_POSTS')
	}
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						Create Posts
					</Link>
				</div>
				All blog posts
			</div>

		);
	}
}

export default connect(null, { fetchPosts })(PostsIndex)