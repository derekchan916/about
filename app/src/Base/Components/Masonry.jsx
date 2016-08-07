'use strict';

import './Masonry.scss';
import React, {
	Component
} from 'react';

import MasonryComponent from 'react-masonry-component'; // Component from https://github.com/eiriklv/react-masonry-component
import _ from 'lodash';
import Config from '../../Main/Config';

const ImageCount = 7;

class Masonry extends Component {
	constructor(props) {
		super (props);
		this.state = {
			imageNums: [],
			imagesLoaded: false,
		}
	}

	componentWillMount() {
		var arr = [];

		for (var i = 1; i < ImageCount; i++) {
			arr.push(i);
		}

		this.setState({imageNums: _.shuffle(arr)});
	}

	render () {
		var displayStyle = !this.state.imagesLoaded ? 'none' : 'inline-block';

        return (
			<MasonryComponent
				className={"Masonry__Container"}
				options={{transitionDuration: 0}}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
				style={{display: displayStyle}}
				onImagesLoaded={() => this.handleImagesLoaded()}
				>
				{this.state.imageNums.map((imageNum, index) => (
					<img
						key={index}
						className="Masonry__Item"
						src={'http://res.cloudinary.com/' + Config.CLOUDINARY_NAME + '/image/upload/w_300/haylie-wu' + imageNum}
						alt="pretty kitty"
						/>
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

export default Masonry;
