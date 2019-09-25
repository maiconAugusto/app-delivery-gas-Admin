import React from 'react';
import Routers from './Routers';
import axios from 'axios'
import firebase from 'firebase'

axios.defaults.baseURL = "https://app-delivery-gas-9d18d.firebaseio.com/"

export default class App extends React.Component{
  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyC0f6gYHUWEdu4jvR-TAG-F9xJX8JK2aeA",
      authDomain: "app-delivery-gas-9d18d.firebaseapp.com",
      databaseURL: "https://app-delivery-gas-9d18d.firebaseio.com",
      projectId: "app-delivery-gas-9d18d",
      storageBucket: "",
      messagingSenderId: "275633883573",
      appId: "1:275633883573:web:17f39f39ec85bc1d6131fc"
    };

    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  }
  render(){
    return(
      <Routers/>
    )
  }
}

