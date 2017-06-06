import React from 'react';
import { connect } from 'react-redux';
import { emailChange, passwordChange, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends React.Component {
	onEmailChange(text) {
		this.props.emailChange(text);
	}

	onPasswordChange(text) {
		this.props.passwordChange(text);
	}

	onButtonPress() {
		const { email, password } = this.props;
		this.props.loginUser({ email, password });
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label="Email"
						placeHolder="email.@email.com"
						onChangeText={this.onEmailChange.bind(this)}
						value={this.props.email}
					/>
				</CardSection>
				<CardSection>
					<Input 
						secureText
						label="Password"
						placeHolder="Password"
						onChangeText={this.onPasswordChange.bind(this)}
						value={this.props.password}
					/>
				</CardSection>
				<CardSection>
					<Button children="Login" onPress={this.onButtonPress.bind(this)} />
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password
	};
};

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);
