import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './cardsection';
import { Button } from './button';

class Confirm extends React.Component {
	render() {
		return (
			<Modal 
				animationType='slide'
				onRequestClose={() => {}}
				transparent
				visible={this.props.visible}
			>
				<View style={styles.containerStyle}>
					<CardSection style={styles.cardSectionStyle}>
						<Text style={styles.textStyle}>
							{this.props.children}
						</Text>
					</CardSection>
					<CardSection style={styles.cardSectionStyle}>
						<Button children='Yes' onPress={this.props.onAccept} />
						<Button children='No' onPress={this.props.onDecline} />
					</CardSection>
				</View>
			</Modal>
		);
	}
}

const styles = {
	cardSectionStyle: {
		justifyContent: 'center'
	},
	textStyle: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	},
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75 )',
		position: 'relative',
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 10,
		paddingRight: 10
	}
};

export { Confirm };
