import React from 'react'
import { Image } from 'react-native'

import { Header } from '../../common'
import { ListNotify } from './components'

import { Container } from '../../layouts';
import { Color } from '../../values';

import { strings } from '../../i18n'

const HEADER_LEFT_ICON = require('../../assets/image/whiteBack/whiteBack.png')

function RenderHeader() {
    return (
        <Header
            leftIcon={HEADER_LEFT_ICON}
            title={strings('message_title')}
        />
    )
}

class Notification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <Container header={<RenderHeader />} style={{ backgroundColor: Color.whiteGray }}>
                <ListNotify />
            </Container>
        )
    }
}

export default Notification;