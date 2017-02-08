'use strict';

import './Timeline.scss'
import React, {
	Component,
	PropTypes
} from 'react';

const WINDOW_APPEAR_PERCENTAGE = 0.85;

class Timeline extends Component {
	constructor (props) {
		super(props);
		this.state = {
			scrollY: 0
		};
	}

	componentWillMount () {
		window.addEventListener('scroll', () => this.handleScroll());
	}

	componentDidMount () {
		this.showBlocks();
	}

	componentWillUpdate (nextProps, nextState) {
		this.showBlocks();
		window.refs = this.refs;
	}

	componentWillUnmount () {
		window.removeEventListener('scroll', () => this.handleScroll());
	}

	render () {
		return (
			<div className="Timeline__Wrapper">
				<div className="Timeline__Container">
					<div className="Timeline__Block" ref="block1">
						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Title of section 1</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
						</div>

						<div className="Timeline__Icon Picture">
						</div>

						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Jan 14</h2>
						</div>
					</div>

					<div className="Timeline__Block" ref="block2">
						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Title of section 2</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
						</div>

						<div className="Timeline__Icon Movie">
						</div>

						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Jan 18</h2>
						</div>
					</div>

					<div className="Timeline__Block" ref="block3">
						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Title of section 3</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
						</div>

						<div className="Timeline__Icon Picture">
						</div>

						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Jan 24</h2>
						</div>
					</div>

					<div className="Timeline__Block" ref="block4">
						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Title of section 4</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
						</div>

						<div className="Timeline__Icon Location">
						</div>

						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Feb 14</h2>
						</div>
					</div>

					<div className="Timeline__Block" ref="block5">
						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Title of section 5</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
						</div>
						<div className="Timeline__Icon Location">
						</div>
						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Feb 18</h2>
						</div>
					</div>

					<div className="Timeline__Block"  ref="block6">
						<div className="Timeline__PrimaryContent PrimaryContent">
							<h2>Final Section</h2>
							<p>This is the content of the last section</p>
						</div>
						<div className="Timeline__Icon Movie">
						</div>
						<div className="Timeline__SecondaryContent SecondaryContent">
							<h2 className="Timeline__Date">Feb 26</h2>
						</div>
					</div>
				</div>
			</div>
		)
	}

	handleScroll (event) {
		this.setState({scrollY: window.scrollY})
	}

	showBlocks () {
		const heightToAppear = window.innerHeight * WINDOW_APPEAR_PERCENTAGE;

		Object.keys(this.refs).forEach((ref) => {
			if (this.refs[ref].getBoundingClientRect().top < heightToAppear) {
				this.refs[ref].classList.add("Display")
			}
		});
	}
}

Timeline.propTypes = {
}

export default Timeline;
