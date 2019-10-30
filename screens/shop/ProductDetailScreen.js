import React from 'react'
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const ProductDetailScreen = (props) => {

    const productId = props.navigation.getParam('productId'); // Param from view Detail Button
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))


    return (
        <ScrollView>
            <Text>{selectedProduct.title}</Text>
        </ScrollView>
    )
}

ProductDetailScreen.navigationOptions=(navData)=>{
    return {
        headerTitle:navData.navigation.getParam('productTitle')
    }
}
const styles = StyleSheet.create({

})

export default ProductDetailScreen;

