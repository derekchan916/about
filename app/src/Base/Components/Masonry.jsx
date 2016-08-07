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
	constructor (props) {
		super(props);
		this.state = {
			imageNums: [],
			imagesLoaded: false,
			windowWidth: window.innerWidth,
		}
	}

	componentWillMount () {
		var arr = [];

		for (var i = 1; i <= ImageCount; i++) {
			arr.push(i);
		}

		this.setState({imageNums: _.shuffle(arr)});
	}

	componentDidMount () {
		window.addEventListener('resize', () => this.handleResize());
	}

	componentWillUnmount () {
		window.removeEventListener('resize', () => this.handleResize());
	}

	render () {
		return null;
		
		const windowWidth = this.state.windowWidth;
		const displayStyle = !this.state.imagesLoaded ? 'none' : 'inline-block';
		var imageWidth;

		switch (true) {
			case (windowWidth < 568):
				imageWidth = 310;
				break;
			case (windowWidth < 768):
				imageWidth = 558;
				break;
			case (windowWidth < 960):
				imageWidth = 374;
				break;
			case (windowWidth < 1200):
				imageWidth = 310;
				break;
			default:
				imageWidth = 390;
		}

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
						src={'http://res.cloudinary.com/' + Config.CLOUDINARY_NAME + '/image/upload/w_'+ imageWidth + '/haylie-wu' + imageNum}
						alt="pretty kitty"
						/>
				))}
			</MasonryComponent>
        );
    }

	handleResize (e) {
		this.setState({windowWidth: window.innerWidth});
	}

	handleImagesLoaded () {
		if (!this.state.imagesLoaded) {
			this.setState({imagesLoaded: true});
		}
	}
}

export default Masonry;
