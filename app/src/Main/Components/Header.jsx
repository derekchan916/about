'use strict';

import './Header.scss';
import React, {
	Component,
	PropTypes,
} from 'react';
import {
	Link,
} from 'react-router';

import Config from '../../Main/Config';

class Header extends Component {
	render () {
		const viewDisable = this.props.headerAvatarDisabled ? 'Disable' : '';

		return (
			<div className="Header__Wrapper">
				<div className="Header__Container">
					<div className="Header__Logo"></div>
					<div className={"Header__AvatarList " + viewDisable}>
						{Config.AVATAR_LIST.map((avatar, index) => (
							<Link
								key={index}
								to={avatar.value}
								className={"Header__AvatarList--child"}
								style={{backgroundImage:'url(' + avatar.url + ')'}}
								>
							</Link>
						))}
					</div>
				</div>
			</div>
		)
	}
}

Header.propTypes = {
	headerAvatarDisabled: PropTypes.bool,
}

export default Header;
