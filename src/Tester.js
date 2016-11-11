import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Tester extends Component {
	render() {
		return (
			<div>
				Tester
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
};
function mapActionsToProps(dispatch) {
	return {
		actions: bindActionCreators({ }, dispatch)
	}
}

export default connect(mapStateToProps, mapActionsToProps)(Tester);
