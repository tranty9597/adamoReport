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
import { ChildItemRow } from './components'
/**
 * @description stateless class
 * @param {*} param0 
 */
class ItemRow extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        };
        this.renderChildItems = this.renderChildItems.bind(this)
    }

    renderChildItems() {
        let { childItems } = this.props;
        return childItems.map((item) => {
            return (
                <ChildItemRow title={item} />
            );
        });
    }

    render() {
        let leftIcon = this.props.leftIcon;
        let rightIcon = this.props.rightIcon;
        let title = this.props.title;
        return (
            <React.Fragment>
                <TouchableOpacity style={styles.container} onPress={() => this.setState({ isExpanded: !this.state.isExpanded })}>
                    {leftIcon && <View style={styles.icon}>
                        <Image source={leftIcon} />
                    </View>}
                    <Text style={styles.title}>{title}</Text>
                    {rightIcon && <View style={styles.icon}>
                        <Image source={rightIcon} />
                    </View>}

                </TouchableOpacity>
                {this.state.isExpanded && this.renderChildItems()}
            </React.Fragment>

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
        width: '70%',
        height: '100%',
    },
    icon: {
        ...AppStyle.justifyContentCenter,
        width: '15%',
        height: '100%'
    }
})

export default ItemRow;