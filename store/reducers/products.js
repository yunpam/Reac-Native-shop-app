import PRODUCTS from '../../data/dummy-data'

const initialRoute = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
}

export default productsReducer = (state = initialRoute, action) => {
    return state;
}