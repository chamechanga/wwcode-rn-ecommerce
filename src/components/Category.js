import React from 'react'
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';
const Category = (props) => {
    const { category } = props;
    const { title, image } = category;
    const navigation = useNavigation(); 

    return (
        <View style={{margin: 10}}>
            <TouchableOpacity onPress={() => navigation.push('Product List') }>
            <Image source={image} style={{height: 70, width: 70}} />
            <Text style={{marginTop: 10, textAlign: 'center', color: '#898989'}}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category
