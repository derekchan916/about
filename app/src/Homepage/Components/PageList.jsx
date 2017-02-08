'use strict';

import './PageList.scss';
import React, {
	Component,
	PropTypes
} from 'react';
import {
	Link,
} from 'react-router';

import Config from '../../Main/Config';

class PageList extends Component {
	constructor (props) {
		super(props);
		this.state = {
			disable: false,
		}
	}

	render () {
		const viewDisable = this.state.disable ? 'Disable' : '';

		return (
			<div className="PageList__Wrapper">
				<div className="PageList__Container">
					{Config.AVATAR_LIST.map((avatar, index) => (
						<Link
							key={index}
							to={avatar.value}
							className={"PageList__Avatar " + viewDisable}
							style={{backgroundImage:'url(' + avatar.url + ')'}}
							onClick={() => this.onAvatarClick(avatar.value)}
							>
						</Link>
					))}
				</div>
			</div>
		)
	}

	onAvatarClick (value) {
		this.setState({disable: true});
		this.props.showHeaderAvatar();
	}
}

PageList.propTypes = {
	showHeaderAvatar: PropTypes.func,
}

export default PageList;
