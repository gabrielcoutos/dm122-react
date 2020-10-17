import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from '../Home';
import Category from '../Category';
import {colors} from '../../styles'
import Help from '../help';
import Profile from '../profile';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;

                    if(route.name === 'home'){
                        iconName = 'home'
                    }

                    if(route.name === 'category'){
                        iconName = 'list'
                    }

                    if(route.name === 'profile'){
                        iconName = 'user'
                    }

                    if(route.name === 'help'){
                        iconName = 'question'
                    }

                    return <Icon name={iconName} size={25} style={{color: color}} />
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: colors.white
                },
                showLabel: false,
                activeTintColor: colors.base,
                inactiveTintColor: colors.light
            }}>

            <Tab.Screen name='home' component={Home}/>
            <Tab.Screen name='category' component={Category}/>
            <Tab.Screen name='profile' component={Profile}/>
            <Tab.Screen name='help' component={Help}/>
        </Tab.Navigator>
    )
}

export default BottomTab;