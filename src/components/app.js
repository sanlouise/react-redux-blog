import React, { Component } from 'react';

//Ensure that children in nested routes are also rendering.
//This.props.children are defined in routes
export default class App extends Component {
	render() {
		return (
			<div>
			{this.props.children}
			</div>
		);
	}
}
