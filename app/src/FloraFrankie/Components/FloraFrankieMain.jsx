'use strict';

import React, {
	Component,
	PropTypes
} from 'react';
import Timeline from '../../Base/Components/Timeline';

class FloraFrankieMain extends Component {
	constructor (props) {
		super(props);
	}

	componentDidMount() {
		this.props.showHeaderAvatar();
	}

	render () {
		return (
			<div>
				<Timeline />
			</div>
		)
	}
}

FloraFrankieMain.propTypes = {
	contentHasLoaded: PropTypes.func,
	currentPage : PropTypes.string,
}

export default FloraFrankieMain;
