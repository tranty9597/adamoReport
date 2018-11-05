import React from 'react'
import { Image, Text } from 'react-native'
import { VictoryBar } from "victory-native";
import * as Progress from 'react-native-progress';
import { Header } from '../../common'

// import {  } from './components'
import { Container } from '../../layouts';
import { Color } from '../../values';


class SaleByCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container header={<Header />} style={{ backgroundColor: Color.whiteGray }}>
                <Text>Sale by category</Text>
            </Container>
        )
    }
}

export default SaleByCategory;