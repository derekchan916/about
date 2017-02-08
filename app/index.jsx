'use strict';

import './stylesheets/_styleguide.scss';
import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import {
	hashHistory,
	IndexRoute,
	Link,
	Router,
	Route,
} from 'react-router';

import App from './src/App';
import PageList from './src/Homepage/Components/PageList';
import HaylieMain from './src/Haylie/Components/HaylieMain';
import FloraFrankieMain from './src/FloraFrankie/Components/FloraFrankieMain';

class Index extends Component {
	render () {
		return (
			<div className="Styleguide">
				<Router history={hashHistory}>
					<Route path="/" component={App}>
						<IndexRoute component={PageList}/>
						<Route path="haylie" component={HaylieMain}/>
						<Route path="floraFrankie" component={FloraFrankieMain}/>
					</Route>
				</Router>
			</div>
		)
	}
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Index />, document.getElementById('main'));
});
