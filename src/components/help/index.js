import React from 'react';
import { ScrollView } from 'react-native';
import style from './style';
import Header from '../Header';

const Help = ( {navigation} ) => {
    return (
        <>
            <Header />
            <ScrollView style={style.container}>
                <Text style ={style.text}>Pedido</Text>
                <Text style ={style.text}>Pagamento</Text>
                <Text style ={style.text}>Entrega</Text>
                <Text style ={style.text}>Contato</Text>
            </ScrollView>
        </>
    )
}

export default Help;