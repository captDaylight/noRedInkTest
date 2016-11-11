import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { startTests as startTestsAction } from './actions';
import { groupBy } from 'lodash';

function Test(props) {
  return <li>{props.description}</li>;
}

class Tester extends Component {
	render() {
		const { tests, actions: { startTests } } = this.props;

		const testGroups = groupBy(tests, test => test.status);

		return (
			<div>
				<button onClick={() => startTests(tests)}>Start Tests</button>

				<h1>Tests Ready!</h1>
				{
					'1' in testGroups && (
						<ul>
							{testGroups['1'].map((t, i) => <Test description={t.description} />)}
						</ul>
					)
				}

				<h1>Tests Running</h1>
				{
					'2' in testGroups && (
						<div>
							<ul>
								{testGroups['2'].map((t, i) => <Test description={t.description} />)}
							</ul>
							<img src="https://thomas.vanhoutte.be/miniblog/wp-content/uploads/light_blue_material_design_loading.gif"/>
						</div>
					)
				}

				<h1>Passed</h1>
				{
					'3' in testGroups && (
						<ul>
							{testGroups['3'].map((t, i) => <Test description={t.description} />)}
						</ul>
					)
				}

				<h1>Failed</h1>
				{
					'4' in testGroups && (
						<ul>
							{testGroups['4'].map((t, i) => <Test description={t.description} />)}
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
