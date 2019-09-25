import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from './Home'

const mainNavigation = createBottomTabNavigator({
    HOME:{
        screen: Home, navigationOptions:{
            header: null
        }
    }
},{
    defaultNavigationOptions:{
        tabBarOptions:{
            activeTintColor: '#2476E6',
            labelStyle:{
                fontSize: 16,
                marginBottom: 12,
                fontWeight: '700'
            },
            style:{
                backgroundColor: '#F5F4F4'
            }
        }
    }
})
export default createAppContainer(mainNavigation)