import React from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { employeeUpdate } from '../actions/employeeactions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends React.Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label='Name'
						placeHolder='Employee name'
						value={this.props.name}
						onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
					/>
				</CardSection>
				<CardSection>
					<Input 
						label='Phone'
						placeHolder='Employee phone no'
						value={this.props.phone}
						onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
					/>
				</CardSection>
				<CardSection style={{ flexDirection: 'column' }}>
					<Text style={styles.pickerTextStyle}>Shift</Text>
					<Picker
						selectedValue={this.props.shift}
						onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
					>
						<Picker.Item label='Monday' value='Monday' />
						<Picker.Item label='Tuesday' value='Tuesday' />
						<Picker.Item label='Wednesday' value='Wednesday' />
						<Picker.Item label='Thurday' value='Thurday' />
						<Picker.Item label='Friday' value='Friday' />
						<Picker.Item label='Saturday' value='Saturday' />
						<Picker.Item label='Sunday' value='Sunday' />
					</Picker>
				</CardSection>
				<CardSection>
					<Button
						children='Create'
					/>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	pickerTextStyle: {
		fontSize: 18,
		paddingLeft: 20
	}
};

const mapStateToProps = (state) => {
	const { name, phone, shift } = state.employeeForm;

	return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
