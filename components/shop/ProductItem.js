import React from 'react'
import { View, StyleSheet, Text, Image, Button } from 'react-native'

import Colors from '../../constants/Colors'

const ProductItem = (props) => {
    return (
        <View style={styles.product}>
            <Image source={{ uri: props.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>{props.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button color={Colors.primary} title='View Details' onPress={props.onViewDetail} />
                <Button color={Colors.primary} title='to Cart' onPress={props.onAddToCart} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { heigh: 2, width: 0 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        overflow: 'hidden',

    },
    image: {
        height: '60%',
        width: '100%'
    },
    title: {
        fontSize: 18,
        marginTop: 4
    },
    buttonContainer: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        height:'25%'

    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    details: {
        alignItems: 'center',
        height: '15%',
    },
})


export default ProductItem;