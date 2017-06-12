import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import EmployeeForm from './employeeform';
import { employeeUpdate, employeeSave, clearFormAfterUpdate, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends React.Component {
	state = { showModal: false }
	
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	componentWillUnmount() {
		this.props.clearFormAfterUpdate();
	}

	onButtonPress() {
		const { name, phone, shift } = this.props;

		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	}

	onTextPress() {
		const { phone, shift } = this.props;

		text(phone, `Your upcomming shift is on ${shift}`);
	}

	onDecline() {
		this.setState({ showModal: false });
	}

	onAccept() {
		const { uid } = this.props.employee;

		this.props.employeeDelete({ uid });
	}

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button children='Save Changes' onPress={this.onButtonPress.bind(this)} />
				</CardSection>
				<CardSection>
					<Button children='Send Text Message' onPress={this.onTextPress.bind(this)} />
				</CardSection>
				<CardSection>
					<Button 
						children='Fire this employee' 
						onPress={() => this.setState({ showModal: !this.state.showModal })} 
					/>
				</CardSection>

				<Confirm 
					children='Are you sure you want to delete this?' 
					visible={this.state.showModal}
					onAccept={this.onAccept.bind(this)}
					onDecline={this.onDecline.bind(this)}
				/>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { 
	employeeUpdate, employeeSave, clearFormAfterUpdate, employeeDelete
})(EmployeeEdit);
