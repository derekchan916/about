'use strict';

import './App.scss';
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	hashHistory,
	Link,
	Router,
	Route,
} from 'react-router'

import Header from './Main/Components/Header';

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			contentLoaded: false,
			headerAvatarDisabled: true,
		};
	}

	render () {
		const viewStyle = this.state.contentLoaded ? 'animate' : '';

		return (
			<div>
				<Header
					headerAvatarDisabled={this.state.headerAvatarDisabled}/>
				<div className={"App__ContentWrapper " + viewStyle}>
					{React.cloneElement(this.props.children, {
						contentHasLoaded: () => this.contentHasLoaded(),
						showHeaderAvatar: () => this.showHeaderAvatar(),
					})}
				</div>
			</div>
		)
	}

	onAvatarClick (value) {
		this.setState({currentPage: value})
	}

	contentHasLoaded () {
		this.setState({contentLoaded: true})
	}

	showHeaderAvatar () {
		this.setState({headerAvatarDisabled: false})
	}
}

export default App;
