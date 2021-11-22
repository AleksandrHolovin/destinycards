import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
//styles
import { styles } from './Wellcome.styles';
//types
import { WelcomeI } from './types';


export const Welcome: React.FC<WelcomeI> = ({ navigation }) => (
    <View style={styles.wrapper}>
        <View style={styles.container}>
            <Text>
                Welcome
            </Text>
            <Button title="GO!" onPress={() => navigation.navigate('MainNavigator')} />
        </View>
    </View>
)