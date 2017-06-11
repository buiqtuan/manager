import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

export default class ListItem extends React.Component {
    render() {
        return (
            <CardSection>
                <Text style={styles.titleStyle}>
                    {this.props.employees.name}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
