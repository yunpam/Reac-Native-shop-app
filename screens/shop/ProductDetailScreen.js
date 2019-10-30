import React from 'react'
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import Colors from '../../constants/Colors'

const ProductDetailScreen = (props) => {

    const productId = props.navigation.getParam('productId'); // Param from view Detail Button
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))


    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.actions}>
                <Button title='Add To Cart' color={Colors.primary}
                    onPress={() => { }} />
            </View>
            <Text style={styles.price}>${selectedProduct.price}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
}

ProductDetailScreen.navigationOptions = (navData) => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    price: {
        fontSize: 20,
        color: '#888',
        marginVertical: 20,
        textAlign: 'center'
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal:10
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center',
    }
})

export default ProductDetailScreen;

