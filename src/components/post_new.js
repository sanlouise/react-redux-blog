import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostNew extends Component {
	render() {
		const { fields: { title, categories, content }, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h4>Create a post</h4>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched? title.error : ''}
					</div>
				</div>

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea className="form-control" {...content} />
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>

			</form>
		);
	}
}

function validate(values) {
	const errors = {};
	if (!values.title) {
		errors.title = 'Please enter a title';
	}
	if (!values.categories) {
		errors.categories = 'Please enter a category';
	}
	if (!values.content) {
		errors.content = 'Please enter some content';
	}
	return errors;
}

//Connect: first arg is mapStateToProps, second is mapDispatchToProps
// ReduxForm: first arg is form, second mapStateToProps, third mapDisPatchToProps.

export default reduxForm({
	form: 'PostNewForm',
	fields: ['title', 'categories', 'content'],
	validate
}, null, { createPost })(PostNew);