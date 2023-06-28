import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';



const list = [
    {
        id: 1,
        label: 'Boleto conta de água',
        value: '96,17',
        date: '28/08/2023',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix recebido de Rosimeire',
        value: '500,00',
        date: '27/08/2023',
        type: 1 // receita
    },
    {
        id: 3,
        label: 'Salário',
        value: '2.500,00',
        date: '20/08/2023',
        type: 1
    },
    {
        id: 4,
        label: 'Boleto conta de água',
        value: '55,00',
        date: '10/08/2023',
        type: 0
    },
    {
        id: 5,
        label: 'Pix recebido de João',
        value: '30,00',
        date: '09/08/2023',
        type: 1
    },
    {
        id: 6,
        label: 'Pix realizado para Caio',
        value: '800,00',
        date: '09/08/2023',
        type: 1
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Header name="André Gomes" />
            <Balance saldo="9.240,33" gastos="-345,59" />
            <Actions />
            <Text style={styles.title}>Extrato</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    },

})