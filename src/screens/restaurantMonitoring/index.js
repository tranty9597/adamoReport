import React from 'react'
import { View } from 'react-native'

import { Header, ItemRow } from '../../common'


import { Container } from '../../layouts';
import { Color, AppStyle } from '../../values';

const HEADER_LEFT_ICON = require('../../assets/image/whiteBack/whiteBack.png')

const SCHEDULE_ICON = require("../../assets/image/restaurantMonitoring/schedule.png")
const DINNING_TABLE_ICON = require("../../assets/image/restaurantMonitoring/dining-table.png")
const ICON_REVENUE = require("../../assets/image/restaurantMonitoring/icon-revenue.png")
const FOOD_ICON = require("../../assets/image/restaurantMonitoring/food.png")
const LIST_ICON = require("../../assets/image/restaurantMonitoring/list.png")

/**
 * @description Render header for this screen
 */
function RenderHeader() {
    return (
        <Header
            leftIcon={HEADER_LEFT_ICON}
            title='Restaurant Monitoring'
        />
    )
}

class RestaurantMonitoring extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container header={<RenderHeader />} style={{ backgroundColor: Color.whiteGray }}>
                <View style={AppStyle.container}>
                    <ItemRow leftIcon={SCHEDULE_ICON} title='Sale Summary' />
                    <ItemRow leftIcon={ICON_REVENUE} title='Tets app' />
                    <ItemRow leftIcon={DINNING_TABLE_ICON} title='Tets app' />
                    <ItemRow leftIcon={FOOD_ICON} title='Tets app' />
                    <ItemRow leftIcon={LIST_ICON} title='Tets app' />
                </View>

            </Container>
        )
    }
}

export default RestaurantMonitoring;