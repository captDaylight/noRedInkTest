import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startTests as startTestsAction } from './actions';
import { groupBy } from 'lodash';

class Tester extends Component {
	render() {
		const { tests, actions: { startTests } } = this.props;

		const testGroups = groupBy(tests, test => test.status);

		return (
			<div>
				<button onClick={startTests}>Start Tests</button>
				{
					'1' in testGroups && (
						<ul>
							<li><h1>Tests Ready!</h1></li>
							{
								 testGroups['1'].map((test, i) => {
									return (
										<li key={i}>{test.description} {test.status}</li>
									)
								})
							}
						</ul>
					)
				}

				{
					'2' in testGroups && (

						<ul>
							<li><h1>Tests Running</h1></li>
							{
								 testGroups['2'].map((test, i) => {
									return (
										<li key={i}>{test.description} {test.status}</li>
									)
								})
							}
						</ul>
					)
				}

				{
					'3' in testGroups && (
						<ul>
							<li><h1>Tests Running</h1></li>
							{
								 testGroups['3'].map((test, i) => {
									return (
										<li key={i}>{test.description} {test.status}</li>
									)
								})
							}
						</ul>
					)
				}

				{
					'4' in testGroups && (
						<ul>
							<li><h1>Tests Failed</h1></li>
							{
								 testGroups['4'].map((test, i) => {
									return (
										<li key={i}>{test.description} {test.status}</li>
									)
								})
							}
						</ul>
					)
				}


			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
};
function mapActionsToProps(dispatch) {
	return {
		actions: bindActionCreators({
			startTests: startTestsAction
		}, dispatch)
	}
}

export default connect(mapStateToProps, mapActionsToProps)(Tester);
