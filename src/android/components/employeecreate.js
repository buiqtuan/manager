import React from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions/employeeactions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './employeeform';

class EmployeeCreate extends React.Component {

	onCreateEmployee() {
		const { name, phone, shift } = this.props;

		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button
						children='Create'
						onPress={this.onCreateEmployee.bind(this)}
					/>
				</CardSection>
			</Card>
		);
	}
}

const styles = {

};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
