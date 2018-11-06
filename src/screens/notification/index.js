import React from 'react'
import { Image } from 'react-native'

import { Header } from '../../common'
import { ListNotify } from './components'

import { Container } from '../../layouts';
import { Color } from '../../values';

import { strings } from '../../i18n'

class Notification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let header = (
            <Header title={strings('message_title')} />
        )
        return (
            <Container header={header} style={{ backgroundColor: Color.whiteGray }}>
                <ListNotify />
            </Container>
        )
    }
}

export default Notification;