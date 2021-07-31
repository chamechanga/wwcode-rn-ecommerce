import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import categories from '../../assets/data/categories'
import Category from './Category'

const CategoryList = () => {
    return (
        <View>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={categories} renderItem={({item}) => <Category category={item} />} />
        </View>
    )
}

export default CategoryList
