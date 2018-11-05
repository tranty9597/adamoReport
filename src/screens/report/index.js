import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { TimeCurrency } from '../../common'

import { RenderHeader } from './components'
import { Container } from '../../layouts';
import { Color, AppStyle } from '../../values';


function ContentTitle({title}) {
    return(
        <Text style={styles.contentTitle}>
            {title}
        </Text>
    )
}

class Report extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container header={<RenderHeader />} style={{ backgroundColor: Color.whiteGray }}>
                <TimeCurrency/>
                <ContentTitle title="Sales Summary"/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    contentTitle: {
        ...AppStyle.title,
        ...AppStyle.lgText,
        color: Color.scarlet
    }
})

export default Report;