import {
    Notification,
    Report,
    Message,
    Login,
    SalesByCategory,
    SalesByRestaurant,
    TableLoading,
    TableOccupancy,
    RestaurantMonitoring
} from '../../screens'

const authRoutes = {
    Login
}

const stackAppRouters = {
    RestaurantMonitoring,
    Report,
    Message,
    Notification,
    SalesByCategory,
    SalesByRestaurant,
    TableLoading,
    TableOccupancy
}


export { authRoutes, stackAppRouters }