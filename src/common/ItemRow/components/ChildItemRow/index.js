/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the ChildItemRow class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { Sizes, AppStyle, Color } from '../../../../values'
/**
 * @description defines child items of a row
 * @param {*} param0 
 */
class ChildItemRow extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    onPress = () => {

    }

    render() {
        let { title } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this.onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        )
    }
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
        width: '60%',
        height: '100%',
    }
})

export default ChildItemRow