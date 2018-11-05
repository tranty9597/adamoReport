/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the HEader for dashboard
 * @author ADAMO
 * @since  10/15/2018
 */

import React from 'react'
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native'

import { Header } from '../../../../common'

import { AppStyle, Device } from '../../../../values';

const SELECT_ICON = require('../../../../assets/image/menuDashboard/select.png');
const RESTAURANT_ICON = require('../../../../assets/image/menuDashboard/restaurants.png');
const BILL_ICON = require('../../../../assets/image/menuDashboard/bill.png');
const NOTI_ICON = require('../../../../assets/image/menuDashboard/notify.png');
const MESS_ICON = require('../../../../assets/image/menuDashboard/messenger.png');
const PROFILE_ICON = require('../../../../assets/image/menuDashboard/user.png');

function RenderHeaderCompoent({ source, onPress }) {
    return (
        <TouchableOpacity style={styles.iconHeader}>
            <Image source={source} />
        </TouchableOpacity>
    )
}

function RenderHeader({ onSelect, onRestaurnat, onBill, onNoti, onMess, onProfile }) {
    return (
        <Header>
            <View style={{ ...AppStyle.row }}>
                <RenderHeaderCompoent source={SELECT_ICON} onPress={onSelect} />
                <RenderHeaderCompoent source={RESTAURANT_ICON} onPress={onRestaurnat} />
                <RenderHeaderCompoent source={BILL_ICON} onPress={onBill} />
                <RenderHeaderCompoent source={NOTI_ICON} onPress={onNoti} />
                <RenderHeaderCompoent source={MESS_ICON} onPress={onMess} />
                <RenderHeaderCompoent source={PROFILE_ICON} onPress={onProfile} />
            </View>
        </Header>
    )
}
const styles = StyleSheet.create({
    iconHeader: {
        ...AppStyle.flexCenter,
        width: Device.screenWidth / 6
    }
})

export default RenderHeader;