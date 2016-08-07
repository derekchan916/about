'use strict';

import './Content.scss';
import React, {
	Component,
	PropTypes
} from 'react';

import Masonry from '../../Base/Components/Masonry';

const AVATARLINKS = [
	'app/images/haylie-avatar.png',
	'app/images/flora-avatar.png',
	'app/images/lorena-avatar.png',
	'app/images/derek-avatar.png',
]

class Content extends Component {
	constructor (props) {
		super(props);
		this.state = {
			sideView: false
		}
	}

	render () {
		const viewStyle = this.state.sideView ? 'sideView' : '';
		
		return (
			<div className="Content__Wrapper">
				<div className="Content__Container">
					{AVATARLINKS.map((avatarLink, index) => (
						<div
							key={index}
							className="Content__Avatar"
							style={{backgroundImage:'url(' + avatarLink + ')'}}
							onClick={() => this.onAvatarClick()}
							>
						</div>
					))}
				</div>
				<Masonry />
			</div>
		)
	}

	onAvatarClick () {
		this.setState({sideView: true});
	}
}

Content.propTypes = {
	currentPage : PropTypes.string,
}

export default Content;
