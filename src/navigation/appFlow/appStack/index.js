import { createStackNavigator } from 'react-navigation'

import { stackAppRouters } from '../../routers'

const AppStackFlow = createStackNavigator(
    stackAppRouters,
    {
        initialRouteName: 'Dashboard',
    }
)

export default AppStackFlow