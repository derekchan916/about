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
			sideView: false,
			disable: false,
		}
	}

	render () {
		const viewStyle = this.state.sideView ? 'sideContent ' : 'mainContent ';
		const viewDisable = this.state.disable ? 'Disable' : '';

		return (
			<div className={"Content__Wrapper " + viewStyle}>
				<div className={"Content__Container " + viewStyle}>
					{AVATARLINKS.map((avatarLink, index) => (
						<div
							key={index}
							className={"Content__Avatar " + viewStyle + viewDisable}
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
		this.setState({disable: true});
		setTimeout(() => {
			this.setState({
				sideView: !this.state.sideView,
				disable: false,
			})
		}, 100);
	}
}

Content.propTypes = {
	currentPage : PropTypes.string,
}

export default Content;
