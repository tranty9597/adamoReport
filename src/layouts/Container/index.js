import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'

type ContainerProps = {
    style: StyleSheet,
    header: Node
}

class Container extends React.PureComponent<ContainerProps> {
    constructor(props) {
        super(props);
        this.state = { active: false }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ active: true })
        }, 50);
    }
    render() {
        let { header, children, style } = this.props
        let { active } = this.state
        return (
            <TouchableWithoutFeedback onPress={this._onPress}>
                <React.Fragment>
                    <View style={[styles.container, style]}>
                        {header}
                        {active && children}
                    </View>
                </React.Fragment>
            </TouchableWithoutFeedback>

        )
    }
    /**
     * @description Dissmiss keboard when press
     */
    _onPress = () =>{
        Keyboard.dismiss()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Container