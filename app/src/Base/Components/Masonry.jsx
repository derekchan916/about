'use strict';

import './Masonry.scss';
import React, {
	Component
} from 'react';

// Component from https://github.com/eiriklv/react-masonry-component
import MasonryComponent from 'react-masonry-component';

class Masonry extends Component {
	constructor(props) {
		super (props);
		this.state = {
			imagesArr: [],
			imagesLoaded: false,
		}
	}

	componentWillMount() {
		var arr = [];

		for (var i = 0; i < 10; i++) {
			arr.push({
				'width': getRandomSize(300, 300),
				'height': getRandomSize(200, 400),
			});
		}

		this.setState({imagesArr: arr});
	}

	render () {
		var displayStyle = !this.state.imagesLoaded ? 'none' : 'inline-block';

        return (
			<MasonryComponent
				className={'Masonry__Container'}
				elementType={'ul'}
				options={{transitionDuration: 0}}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
				style={{display: displayStyle}}
				onImagesLoaded={() => this.handleImagesLoaded()}
				>
				{this.state.imagesArr.map((img, index) => (
					<li key={index}>
						<img
							src={'http://placekitten.com/'+img.width+'/'+img.height}
							alt="pretty kitty"
							/>
					</li>
				))}
			</MasonryComponent>
        );
    }

	handleImagesLoaded () {
		if (!this.state.imagesLoaded) {
			this.setState({imagesLoaded: true});
		}
	}
}

function getRandomSize (min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

export default Masonry;
