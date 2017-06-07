import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { emailChange, passwordChange, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

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

	onLoggingIn() {
		if (this.props.loading) {
			return <Spinner size='large' />;
		}
		return (<Button children="Login" onPress={this.onButtonPress.bind(this)} />);
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
				<Text style={styles.errorTextStyle}>
					{this.props.error}
				</Text>
				<CardSection>
					{this.onLoggingIn()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading
	};
};

export default connect(mapStateToProps, { emailChange, passwordChange, loginUser })(LoginForm);
