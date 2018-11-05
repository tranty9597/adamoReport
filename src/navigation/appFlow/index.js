import { createDrawerNavigator } from 'react-navigation'

import AppStackFlow from './appStack'

import SideBar from './sideBar'
import { screenWidth } from '../../values/device';

const AppFlow = createDrawerNavigator(
    {
        AppStackFlow
    },
    {
        contentComponent: SideBar,
        drawerWidth: screenWidth,
        drawerPosition: 'right'
    }
)

export default AppFlow