'use strict';

import './stylesheets/_styleguide.scss';
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

import Header from './src/Main/Components/Header';
import Content from './src/Main/Components/Content';

class Index extends Component {
	render () {
		return (
			<div className="Styleguide">
				<Header />
				<Content />
			</div>
		)
	}
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Index />, document.getElementById('main'));
});
