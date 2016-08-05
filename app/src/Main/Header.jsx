'use strict';

import './Header.scss';
import React, {
	Component
} from 'react';

class Header extends Component {
	render () {
		return (
			<div className="Header__Container">
				<div className="Header__Logo"></div>
				<div className="Header__Tabs">
					<span>Haylie</span>
					<span>Chan</span>
					<span>About</span>
				</div>
			</div>
		)
	}
}

export default Header;
