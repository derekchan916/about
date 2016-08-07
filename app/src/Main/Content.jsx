'use strict';

import './Content.scss';
import React, {
	Component
} from 'react';

import Masonry from '../Base/Components/Masonry';

const AVATARLINKS = [
	'app/images/haylie-avatar.png',
	'app/images/flora-avatar.png',
	'app/images/lorena-avatar.png',
	'app/images/derek-avatar.png',
]

class Content extends Component {
	render () {
		return (
			<div className="Content__Wrapper">
				<div className="Content__Container">
					{AVATARLINKS.map((avatarLink, index) => (
						<div
							key={index}
							className="Content__Avatar"
							style={{backgroundImage:'url(' + avatarLink + ')'}}
							>
						</div>
					))}
				</div>
				<Masonry />
			</div>
		)
	}
}

export default Content;
