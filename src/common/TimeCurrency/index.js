/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the Time and Currency class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { AppStyle, Sizes, Color } from '../../values';
/**
 * @description stateless function for IconCircle
 * @param {*} param0 
 */
class TimeCurrency extends React.PureComponent {
    render() {
        let { } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.timer}>
                    {"Updated at 9:30 AM"}
                </Text>
                <Image source={require('../../assets/image/money/money.png')} />
                <Text style={styles.currency}>
                    {"Currency unit: VND"}
                </Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        ...AppStyle.container,
        ...AppStyle.row,
        paddingTop: Sizes.MD_GAP,
    },
    timer: {
        ...AppStyle.smText,
        ...AppStyle.lightWeight,
        width: '50%',
        color: Color.greyish
    },
    currency: {
        ...AppStyle.smText,
        textAlign: 'right', 
        alignSelf: 'stretch',
        color: Color.greyish,
        paddingLeft: Sizes.SM_GAP,
    }
})

export default TimeCurrency