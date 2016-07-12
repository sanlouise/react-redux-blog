import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostNew extends Component {
	render() {
		return (
			<form>
				<h4>Create a post</h4>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" />
				</div>

				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" />
				</div>

				<div className="form-group">
					<label>Body</label>
					<textarea className="form-control" />
				</div>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostNewForm',
	fields: ['title', 'categories', 'content']
})(PostNew);