'use strict';

import './stylesheets/_styleguide.scss';
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

import Content from './src/Main/Components/Content';

class Index extends Component {
	constructor (props) {
		super(props);
		this.state = {
			currentPage: 'Home'
		}
	}

	render () {
		return (
			<div className="Styleguide">
				<Content
					currentPage={this.state.currentPage}
					/>
			</div>
		)
	}
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Index />, document.getElementById('main'));
});
