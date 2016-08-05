'use strict';

import './stylesheets/_styleguide.scss';
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

import Header from './Main/Header';

class Index extends Component {
	render () {
		return (
			<div>
				<Header />
			</div>
		)
	}
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Index />, document.getElementById('main'));
});
