import React, { useState }  from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ProductDetail = () => {
    const sizes = ["S", "M", "L", "XL"]
    const [selectedSize, setSelectedSize] = useState(0)
    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                    <Text style={{fontSize: 24, flex: 3}}>Sleeveless Shirt</Text>
                    <Text style={{fontSize: 24, flex: 1}}>sdfsdf</Text>
                </View>
                <Text style={{marginVertical: 30, marginBottom: 10}}>Details</Text>
                <Text>DetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetailsDetails</Text>

                <Text style={{marginVertical: 30, marginBottom: 10}}>Sizes</Text>
                <View style={{flexDirection: 'row'}}>
                {
                    sizes.map((data, key) => {
                        return (
                            <View key={key} style={{marginHorizontal: 10}}>
                                {
                                    selectedSize == key ?
                                    <TouchableOpacity style={{backgroundColor: '#ECECF1', borderColor: '#b2b2b2', borderWidth: 1, height: 50, width: 50, justifyContent: 'center', borderRadius: 25, alignItems: 'center'}}>
                                        <Text>{data}</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => setSelectedSize(key)} style={{backgroundColor: 'white', height: 50, borderRadius: 25, borderColor: '#dddddd', borderWidth: 1, width: 50, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text>{data}</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default ProductDetail
