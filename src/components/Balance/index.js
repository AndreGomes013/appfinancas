import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';

export default function Balance({ saldo, gastos }) {
    return (
        <MotiView
            style={styles.container}
            from={{
                rotateX: '-100deg',
                opacity: 0,
            }}
            animate={{
                rotateX: '0deg',
                opacity: 1,
            }}
            transition={{
                type: 'timing',
                delay: 300,
                duration: 900
            }}
        >
            <View>
                <Text style={styles.itemTitulo}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.cifrao}>R$</Text>
                    <Text style={styles.saldo}>{saldo}</Text>
                </View>
            </View>

            <View>
                <Text style={styles.itemTitulo}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.cifrao}>R$</Text>
                    <Text style={styles.gastos}>{gastos}</Text>
                </View>
            </View>
        </MotiView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginLeft: 14,
        marginRight: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        elevation: 5,
        zIndex: 99

    },
    itemTitulo: {
        fontSize: 20,
        color: '#dadada',

    },

    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cifrao: {
        color: '#dadada',
        marginRight: 6
    },
    saldo: {
        fontSize: 22,
        color: "#2ecc71"
    },

    gastos: {
        fontSize: 22,
        color: "#e74c3c"
    }

})