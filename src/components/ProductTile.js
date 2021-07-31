import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'

const ProductTile = ({product}) => {
    const {name, oldPrice, newPrice, image} = product;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} resizeMode='center' />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.prices}>
                <Text style={styles.newPrice}>${newPrice} </Text>
                {
                    oldPrice && <Text style={styles.oldPrice}>${oldPrice}</Text>
                }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    image: {
        width: Dimensions.get('screen').width/2 - 20, 
        height: 250, 
        borderRadius: 10
    },
    name: {
        width: Dimensions.get('screen').width/2 - 20, 
        marginTop: 10,
        fontSize: 18,
        lineHeight: 26,
        color: '#898989',
        textAlign: 'center'
    },
    prices: {
        fontSize: 14,
        textAlign: 'center'
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through'
    },
    newPrice: {
        fontWeight: 'bold'
    }
})

export default ProductTile
