import React from 'react';
import { ScrollView } from 'react-native';
import {View, Text} from 'react-native';

const Category = () => {
    return (
        <View style={style.container}>
            <ScrollView style={style.container}>
            <TouchableOpacity key={} onPress={}>
                <Image source={{uri: category.image}} style={style.image}/>
                <View>
                    <Text style={style.description}>{category.description}</Text>
                    <Text style={style.items}>{category.items}</Text>
                </View>
            </TouchableOpacity>
            </ScrollView>
        </View>

            
        
    )
}

export default Category