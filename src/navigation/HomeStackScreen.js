import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import ProductListScreen from '../screens/ProductListScreen'
import HomeTabNavigator from './HomeTabNavigator'

const Stack = createStackNavigator();

export const HomeStackScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} 
                    // Navigation bar title
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="Product List" component={ProductListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
