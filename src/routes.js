import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Category from './pages/Category';
import PlayerWheel from './pages/PlayerWheel';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Category" component={Category} />
                <AppStack.Screen name="PlayerWheel" component={PlayerWheel} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};