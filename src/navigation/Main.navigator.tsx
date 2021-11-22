import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//pages
import { MainContainer } from '../pages/Main/Main.container';
import { Settings } from '../pages/Settings/Settings';


const Drawer = createDrawerNavigator();

export const MainNavigator: React.FC = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerShown: false
            }}
        >
            <Drawer.Screen name="Main" component={MainContainer} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    );
}