import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './screens/Login'
import Initial from './screens/Initial'
import Main from './screens/Main'
import Client from './screens/Client'

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
    }
})

export default createAppContainer(Routers)