import React from 'react'
import { Image, Text } from 'react-native'

import { Header } from '../../common'

// import {  } from './components'
import { Container } from '../../layouts';
import { Color } from '../../values';


class DashBoard extends React.Component {
    static navigationOptions = {
        tabBarIcon: (focused) => {
            console.log('foc', focused);
            return <Image source={focused.focused ? require('../../assets/image/home/active.png') : require('../../assets/image/home/normal.png')} />
        }
    }
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container header={<Header />} style={{ backgroundColor: Color.whiteGray }}>

                <Text> DashBoard</Text>
            </Container>
        )
    }
}

export default DashBoard;