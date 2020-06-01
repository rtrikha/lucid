import React, {Component} from 'react';

class TextField extends Component {
	state = {
		count: 3,
	};

	style = {
		fontSize: 40,
	};
	render() {
		return (
			<div>
				<span style={this.style} className="main-button">
					{this.formatNumber()}
				</span>
				<button>test</button>
			</div>
		);
	}

	formatNumber() {
		const {count} = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default TextField;
