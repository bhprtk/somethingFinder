import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar navbar-default" style={styles.navbar}>
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img src="http://www.iconsdb.com/icons/preview/white/dumbbell-xxl.png" className="dumbell-image"/>
						<span style={styles.brand}>Find Gyms</span>
					</Link>
					</div>
			</nav>
		);
	}
}

const styles = {
	navbar: {
		background: '#263238',
		height: 75,
		paddingTop: 10
	},
	brand: {
		color: "#fff",
		fontSize: 30,
		margin: 0
	}
};

export default NavBar;
