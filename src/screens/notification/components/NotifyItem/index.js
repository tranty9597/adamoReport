/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the LinearGradient class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Color, AppStyle, Sizes, Device } from '../../../../values';
import { IconCircle } from '../../../../common';

const DOTI_ICON = require('../../../../assets/image/notification/doti.png')
const BLACK_UNION = require('../../../../assets/image/notification/Union.png')
const HEIGHT = 120
class NotifyIcon extends React.PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.iconContainer}>
                        <IconCircle bgColor={Color.shamrockGreen} icon={DOTI_ICON} size={60} />
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={AppStyle.row}>
                            <Text style={styles.headTit}>Significant CLear</Text>
                            <Text style={styles.headSub}>#771</Text>
                        </View>
                        <Text style={styles.content}>A significant clear for a city. Uhm I dont know this word, and i write something to test hear!</Text>
                        <View style={styles.bottom}>
                            <View style={styles.location} >
                                <Image source={require('../../../../assets/image/location/icon_location.png')} />
                                <View style={styles.textInline}>
                                    <Text numberOfLines={1} style={styles.locationTxt}>Significant CLearrrrrrr s</Text>
                                </View>

                            </View>

                            <View style={styles.time} >
                                <Image source={require('../../../../assets/image/location/icon_location.png')} />
                                <View style={styles.textInline}>
                                    <Text>19h30 2018</Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
                <Image style={styles.union} source={BLACK_UNION} />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...AppStyle.container,
        ...AppStyle.flexCenter,
        ...AppStyle.justifyContentCenter
    },
    wrapper: {
        ...AppStyle.containerFluid,
        ...AppStyle.row,
        ...AppStyle.hr,
        height: HEIGHT,
    },
    iconContainer: {
        ...AppStyle.justifyContentCenter,
        height: HEIGHT,
        width: HEIGHT * 0.7,
    },
    infoContainer: {
        paddingTop: Sizes.SM_GAP,
        width: Device.screenWidth - HEIGHT * 0.7 - 50,
    },
    union: {
        position: 'absolute',
        right: Sizes.MD_GAP
    },
    headTit: {
        ...AppStyle.mdWeight,
        width: '70%'
    },
    headSub: {
        width: '30%',
        textAlign: 'right'
    },
    content: {
        ...AppStyle.marginTopSm,
        height: 70
    },
    bottom: {
        ...AppStyle.row
    },
    location: {
        width: '60%',
        ...AppStyle.row
    },
    time: {
        width: '40%',
        ...AppStyle.row
    },
    timeTxt: {
        textAlign: 'right'
    },
    textInline: {
        width: '90%',
        marginLeft: Sizes.SM_GAP,
    }
})

export default NotifyIcon