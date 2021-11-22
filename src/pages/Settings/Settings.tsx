import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import { styles } from './Settings.styles';


export const Settings: React.FC = () => (
    <View style={styles.wrapper}>
        <Text>
            Settings
        </Text>
        <Button title="GO!" onPress={() => console.log()} />
    </View>
)