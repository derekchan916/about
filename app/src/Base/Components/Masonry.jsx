'use strict';

import './Masonry.scss';
import React, {
	Component
} from 'react';

class Masonry extends Component {
	constructor(props) {
		super (props);
		this.state = {
			imagesArr: []
		}
	}

	componentWillMount() {
		var arr = [];

		for (var i=0; i<10; i++) {
			arr.push({
				'width': getRandomSize(200, 400),
				'height': getRandomSize(200, 400),
			});
		}

		this.setState({imagesArr: arr});
	}

	render () {
		return (
			<div className="Masonry__Container">
				{this.state.imagesArr.map((img, index) => (
					<img
						className="Masonry__Photos"
						key={index}
						src={'http://placekitten.com/'+img.width+'/'+img.height}
						alt="pretty kitty"
						/>
				))}
			</div>
		)
	}
}

function getRandomSize (min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

export default Masonry;
