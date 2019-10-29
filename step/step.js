// 4. Firts Step ProductOverviewScreen: 
    // 1. Create Product OVerview Screen to Show All Product
    // 2. Create Product Detail Screen to Show Product when user Selected Product
    // 3. Create Cart Screen if user add item To The Cart
    // 4. Create OrdersScreen to Show When User Order Product
    // 5. Create User Products Screen to show product that belong to that User
    // 6. Create Edit PRoduct Screen to show when add new product or editing existing product
    // 7. Install Dependencies Package : 
            // 1. redux react-redux react-navigation react-navigation-stack
            // 2. expo install react-native-gesture-handler react-native-reanimated
    // 8. Populated ProductsOverViewScreen Component :
            // 1. Create FlatList Element For List All PRoducts
            // 2.
    // 9. Create Class Product in Models Folder
    // 10. Create Store Folder in the Store Folder We also create reducers and action
    // 11. Create productsReducer in products.js (inside reducers folder) :
            // 1. Create initialRoute then export default state
            // 2. import PRODUCTS from dummy Data in to products.js (inside reducers folder)
    // 3. and Setup availbleProducts with PRODUCTS
    // 4. and setup userProducts with PRODUCTS.filter (prod => prod.ownerId === 'u1)
    // 12. in App JS :
            // 1. we import {createStore, combineReducers} from 'redux' and {Provider}            from 'react-redux' and import reducers we can named productsReducer  or (up       to you)
            // 2. create const rootReducer = combinerReducers({products:productReducer})
            // 3. create const store = createStore (rootReducer)
            // 4. Wrap our View with Provider has props store={store}