'use strict';

import './Masonry.scss';
import React, {
	Component
} from 'react';

// Component from https://github.com/eiriklv/react-masonry-component
import MasonryComponent from 'react-masonry-component';
import Config from '../../Main/Config';

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

		for (var i = 1; i < 7; i++) {
			arr.push(i);
		}

		this.setState({imgNums: arr});
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
				{this.state.imgNums.map((imgNum, index) => (
					<img
						key={index}
						className="Masonry__Item"
						src={'http://res.cloudinary.com/' + Config.CLOUDINARY_NAME + '/image/upload/w_300/haylie-wu' + imgNum}
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
