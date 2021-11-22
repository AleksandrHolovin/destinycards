import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import { styles } from './Main.styles';


export const Main: React.FC = () => (
    <View style={styles.wrapper}>
        <Text>
            Main
        </Text>
        <Button title="GO!" onPress={() => console.log()} />
    </View>
)