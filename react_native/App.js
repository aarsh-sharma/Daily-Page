import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Compo from './src/components';
import Login from './src/components/AuthComponents/Login';
import UserComponent from './src/components/UserComponent';
import Editor from './src/components/UserComponent/Editor'

import ContactInput from './src/components/UserComponent/Contacts/ContactInput';
import Contact from './src/components/UserComponent/Contacts'

const App = createStackNavigator({
  Compo:{screen:Compo},
  Login:{screen:Login},
  User:{screen:UserComponent},
  Editor:{screen:Editor},
  ContactInput: { screen: ContactInput},
  Contact:{screen:Contact}
},
{
  initialRouteName:'Login',
  defaultNavigationOptions:{
    title:'Daily-Page'
  }
}
)

export default createAppContainer(App);
