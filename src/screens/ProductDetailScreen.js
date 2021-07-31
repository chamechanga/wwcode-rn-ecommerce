import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import ProductDetail from '../components/ProductDetail'

const ProductDetailScreen = (props) => {
    // const {name, oldPrice, newPrice, image} = product[0];
    return (
        <View style={{height: '100%', flexDirection: 'column'}}>
            <Image style={{height: 450, width: '100%'}} source={require('../../assets/images/clothes/cloth-1.jpeg')}/>
            <View style={{paddingHorizontal: 30, paddingTop: 40, backgroundColor: 'white', borderRadius: 30, marginTop: -50, height: '100%', width: '100%'}}>
                <ProductDetail />
                <TouchableOpacity style={{width: '100%', height: 50, backgroundColor: '#5e5ea0', marginTop: 40, borderRadius: 25,  justifyContent: 'center'}}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ProductDetailScreen
