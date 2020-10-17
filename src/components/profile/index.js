import React from 'react';
import { ScrollView } from 'react-native';
import ProductList from '../ProductList';
import style from './style';
import Header from '../Header';

const Profile = ( {navigation} ) => {
    return (
        <>
            <Header />
            <ScrollView style={style.container}>

            </ScrollView>
        </>
    )
}

export default Profile;