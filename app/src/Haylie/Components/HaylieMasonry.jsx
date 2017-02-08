'use strict';

import React, {
	Component,
	PropTypes
} from 'react';
import Masonry from '../../Base/Components/Masonry';

class HaylieMasonry extends  Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		this.props.contentHasLoaded();
	}

	render () {
		return (
			<div>
				<Masonry
					searchUrl={'/image/list/haylie.json'}/>
			</div>
		)
	}
}

HaylieMasonry.propTypes = {
	contentHasLoaded: PropTypes.func,
}

export default HaylieMasonry;
