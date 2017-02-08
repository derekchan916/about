'use strict';

import './Masonry.scss';
import React, {
	Component,
	PropTypes,
} from 'react';

import MasonryComponent from 'react-masonry-component'; // Component from https://github.com/eiriklv/react-masonry-component
import _ from 'lodash';
import Config from '../../Main/Config';

class Masonry extends Component {
	constructor (props) {
		super(props);
		this.state = {
			data: null,
			dataLoading: true,
			dataError: null,
			imagesArray: null,
			windowWidth: window.innerWidth,
		}
	}

	componentWillMount () {
		this.fetchImages();
	}

	componentDidMount () {
		window.addEventListener('resize', () => this.handleResize());
	}

	componentWillUnmount () {
		window.removeEventListener('resize', () => this.handleResize());
	}

	componentWillUpdate (nextProps, nextState) {
		var localImageArray;

		if (!nextState.dataLoading && !nextState.imagesArray) {
			this.formatData(nextState.data);
		}
	}

	render () {
		const windowWidth = this.state.windowWidth;
		const displayStyle = !this.state.imagesArray ? 'none' : 'inline-block';
		const placeHolderUrl = 'http://placehold.it/'+imageWidth+'x150';
		var imageWidth;

		if (!this.state.imagesArray) {return null;}

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

		// src={'http://res.cloudinary.com/' + Config.CLOUDINARY_NAME + '/image/upload/w_' + imageWidth + '/' + imageUrl}
        return (
			<MasonryComponent
				className={"Masonry__Container"}
				options={{transitionDuration: 0}}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
				style={{display: displayStyle}}
				onImagesLoaded={() => this.handleImagesLoaded()}
				>
				{this.state.imagesArray.map((imageUrl, index) => (
					<img
						key={index}
						className="Masonry__Item"
						alt="pretty picture"
						src={'http://placehold.it/'+imageWidth+'x150'}
						/>
				))}
			</MasonryComponent>
        );
    }

	fetchImages () {
		fetch('http://res.cloudinary.com/' + Config.CLOUDINARY_NAME + this.props.searchUrl)
		.then((response) => response.json())
		.then((data) => {
			this.setState({
				data: data,
				dataLoading: false,
			})
		})
		.catch((error) => {
			console.warn(error);
			this.setState({
				dataError: error,
			});
		})
	}

	handleResize (e) {
		this.setState({windowWidth: window.innerWidth});
	}

	handleImagesLoaded () {
		if (!this.state.imagesLoaded) {
			this.setState({imagesLoaded: true});
		}
	}

	formatData (data) {
		this.setState({
			imagesArray: _.shuffle(data.resources.map((imgObj) => imgObj.public_id)).slice(0, 5)
		});
	}
}

Masonry.propTypes = {
	searchUrl: PropTypes.string,
}

export default Masonry;
