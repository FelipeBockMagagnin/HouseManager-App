import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Login from './pages/Login/login'
import Home from './pages/Home/home'
import Profile from './pages/Profile/profile'
import Todolist from './pages/ToDoList/todolist'
import Bills from './pages/Bills/bills'

import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' options={{ title: 'Login' }} component={Login} />
        <Stack.Screen name='Home' options={{ headerShown: false }} component={TabNavigator} />
        <Stack.Screen name='Profile' options={{ headerShown: false }} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function TabNavigator () {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          switch (route.name) {
            case 'Home':
              iconName = 'home'
              break

            case 'List':
              iconName = 'list'
              break

            case 'Bills':
              iconName = 'dollar-sign'
              break
          }

          return <Feather name={iconName} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: '#00c853',
        inactiveTintColor: '#1b1b1b'
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List" component={Todolist} />
      <Tab.Screen name="Bills" component={Bills} />
    </Tab.Navigator>
  )
}
