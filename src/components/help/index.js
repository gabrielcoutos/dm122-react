import React from 'react';
import { ScrollView } from 'react-native';
import style from './style';
import Header from '../Header';

const Help = ( {navigation} ) => {
    return (
        <>
            <Header />
            <ScrollView style={style.container}>
                <text>HELP</text>
            </ScrollView>
        </>
    )
}

export default Help;