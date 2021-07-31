import React from 'react'
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import products from '../../assets/data/products'
import ProductTile from '../components/ProductTile'

const ProductListScreen = () => {
    return (
        <View>
            <FlatList numColumns={2} data={products} renderItem={({item}) => <ProductTile product={item} /> } />
        </View>
    )
}

export default ProductListScreen
