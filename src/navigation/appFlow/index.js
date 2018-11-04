import { createDrawerNavigator } from 'react-navigation'

import AppStackFlow from './appStack'

import SideBar from './sideBar'

const AppFlow = createDrawerNavigator(
    {
        AppStackFlow
    },
    {
        contentComponent: SideBar
    }
)

export default AppFlow