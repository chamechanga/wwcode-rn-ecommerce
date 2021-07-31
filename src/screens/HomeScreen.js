import React from 'react'
import { View, Image, Pressable, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import CategoryList from '../components/CategoryList'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation(); 
    return (
        <SafeAreaView style={styles.container}>
            <Pressable 
                    style={styles.searchButton}
                    onPress={() => { navigation.push('ProductListScreen') }}>
                        <Text style={styles.searchButtonText}>
                            Search Products
                        </Text>
            </Pressable>
            <CategoryList style={{flex: 1.5}} />
            <Image style={styles.image} source={require('../../assets/images/home/home-poster.png')} resizeMode='cover' />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%', 
        flexDirection: 'column'
    },
    searchButton: {
        backgroundColor: '#fff',
        width: Dimensions.get('screen').width - 20,
        borderRadius: 10,
        borderColor: '#eaeaea',
        borderWidth: 1,
        margin: 10,
        // Put icons side by side
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.5
    },
    searchButtonText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#c7c5c9'
    },
    image: {
        marginTop: 10, 
        width: '100%', 
        flex: 6
    },
})

export default HomeScreen
