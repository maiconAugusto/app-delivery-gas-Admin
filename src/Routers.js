import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './screens/Login'
import Initial from './screens/Initial'
import Main from './screens/Main'
import Client from './screens/Client'
import MapClient from './screens/Map'

const Routers = createStackNavigator({
    Initial:{
        screen: Initial, navigationOptions:{
            header: null
        }
    },
    Login: {
        screen: Login, navigationOptions:{
            header: null
        }
    },
    Main:{
        screen: Main, navigationOptions:{
            header: null
        }
    },
    ProfileClient:{
        screen: Client, navigationOptions:{
            
        }
    },
    Map:{
        screen: MapClient
    }
})

export default createAppContainer(Routers)