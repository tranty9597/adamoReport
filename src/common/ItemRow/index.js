/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the CardView class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from 'react'
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'

import { Sizes, AppStyle, Color } from '../../values'
/**
 * @description stateless class
 * @param {*} param0 
 */
function ItemRow({ leftIcon, rightIcon, title, onPress }) {
    return (
        <TouchableOpacity style={styles.container}>
            {leftIcon && <View style={styles.icon}>
                <Image source={leftIcon} />
            </View>}
            <Text style={styles.title}>{title}</Text>
            {rightIcon && <View style={styles.icon}>
                <Image source={rightIcon} />
            </View>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        ...AppStyle.row,
        ...AppStyle.hr,
        height: 55,
    },
    title: {
        ...AppStyle.mdText,
        ...AppStyle.lightWeight,
        lineHeight: 55,
        width: '70%',
        height: '100%',
    },
    icon: {
        ...AppStyle.justifyContentCenter,
        width: '15%',
        height: '100%'
    }
})

export default ItemRow