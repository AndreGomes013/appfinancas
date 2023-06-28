import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity

} from 'react-native'

import { MotiView, MotiText } from 'moti'

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64


export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <MotiView
                style={styles.content}
                from={{
                    translateY: -150,
                    opacity: 0
                }}
                animate={{
                    translateY: 0,
                    opacity: 1
                }}

                transition={{
                    type: "timing",
                    duration: 800,
                    delay: 300

                }}
            >
                <MotiText
                    style={styles.userName}
                    from={{
                        translateX: -300
                    }}
                    animate={{
                        translateX: 0
                    }}
                    transition={{
                        type: "timing",
                        duration: 800,
                        delay: 800
                    }}
                >
                    Olá, {name}
                </MotiText>


                <TouchableOpacity activeOpacity={0.9} style={styles.btnUser} >
                    <Feather name='user' size={27} color={'#fff'} />
                </TouchableOpacity>
            </MotiView>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8000ff",
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },

    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },

    userName: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },

    btnUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 44 / 2
    }
})