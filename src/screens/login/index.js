import React from 'react'
import { Image, Text } from 'react-native'

import * as Progress from 'react-native-progress';
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

                <Progress.Pie progress={0.3} width={200} />
            </Container>
        )
    }
}

export default Login;