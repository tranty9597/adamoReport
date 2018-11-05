import { createStackNavigator } from 'react-navigation'

import { stackAppRouters } from '../../routers'

const AppStackFlow = createStackNavigator(
    stackAppRouters,
    {
        initialRouteName: 'Dashboard',
        navigationOptions:{
            header: null
        }
    }
)

export default AppStackFlow