import { StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    bedrooms: {
        marginVertical: 10,
        color: '#9e9e9e',
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: '#9e9e9e',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold'
    },
    totalPrice: {
        color: '#9e9e9e',
        textDecorationLine: 'underline',
    },

});

export default styles;