import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes';

import {app , db} from './src/services/firebaseConf'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#052F0E"}/>
      <Routes/>
    </NavigationContainer>
  )
}
