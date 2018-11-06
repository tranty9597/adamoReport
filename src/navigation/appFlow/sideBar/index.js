import React from 'react'
import { View } from 'react-native'

import { Header, ItemRow } from '../../../common'
import { strings } from '../../../i18n'

import { Container } from '../../../layouts';
import { Color, AppStyle } from '../../../values';


const FAVOURITE_LIST = require("../../../assets/image/sideMenu/favourite.png")
const REVENUE_PAYMENT = require("../../../assets/image/sideMenu/revenue.png")
const MENU_ITEMS_SOLD = require("../../../assets/image/sideMenu/categories.png")
const DISCOUNT_PROMOTION = require("../../../assets/image/sideMenu/promotion.png")
const VOID_REFUND = require("../../../assets/image/sideMenu/refund.png")
const STAFF_PRODUCTIVITY = require("../../../assets/image/sideMenu/staff-promotion.png")
const CRM_LOYALTY = require("../../../assets/image/sideMenu/icon-heart.png")

class RestaurantMonitoring extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container  style={{ backgroundColor: Color.whiteGray }}>
                <View style={AppStyle.container}>
                    <ItemRow leftIcon={FAVOURITE_LIST} title={strings('favouriteList')} 
                        childItems={[strings('salesSummary'), strings('hourlySales'), strings('voidItems')]} />
                    <ItemRow leftIcon={REVENUE_PAYMENT} title={strings('revenuePayment')} />
                    <ItemRow leftIcon={MENU_ITEMS_SOLD} title={strings('menuItemsSold')} />
                    <ItemRow leftIcon={DISCOUNT_PROMOTION} title={strings('discountPromotion')} />
                    <ItemRow leftIcon={VOID_REFUND} title={strings('voidRefund')} />
                    <ItemRow leftIcon={STAFF_PRODUCTIVITY} title={strings('staffProductivity')} />
                    <ItemRow leftIcon={CRM_LOYALTY} title={strings('crmLoyalty')} />
                </View>

            </Container>
        )
    }
}

export default RestaurantMonitoring;