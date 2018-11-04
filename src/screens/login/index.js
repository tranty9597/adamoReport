import React from 'react'
import { Image, Text } from 'react-native'

import { Header } from '../../common'

// import {  } from './components'
import { Container } from '../../layouts';
import { Color } from '../../values';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container header={<Header />} style={{ backgroundColor: Color.whiteGray }}>

                <Text> Login</Text>
            </Container>
        )
    }
}

export default Login;