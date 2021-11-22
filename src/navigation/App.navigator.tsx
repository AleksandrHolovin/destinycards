import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//pages
import { Welcome } from '../pages/Welcome/Welcome';
import { MainNavigator } from './Main.navigator';


const Stack = createStackNavigator();

export const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="MainNavigator" component={MainNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}