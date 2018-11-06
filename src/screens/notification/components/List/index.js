/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the ListNotifycation class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from 'react'
import { FlatList } from 'react-native'
import NotifyItem from '../NotifyItem';

class List extends React.PureComponent {
    render() {
        return (
            <FlatList
                data={[1, 2, 3]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => {
                    return (
                        <NotifyItem />
                    )
                }}
            />
        )
    }
}
export default List