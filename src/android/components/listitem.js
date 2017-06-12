import React from 'react';
import { Actions } from 'react-native-router-flux';  
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends React.Component {
    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employees });
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {this.props.employees.name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
