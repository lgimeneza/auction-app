import Profile from '../app/profile.jsx'
import Landing from '../app/landing.jsx'
import UserProducts from '../app/user-products.jsx'
import Product from '../app/product.jsx'
import Login from '../app/login.jsx'
import Register from '../app/register.jsx'

export default {
    routes: [
        {
            path: '/',
            component: Landing,
            exact: true
        },
        {
            path: '/product/:id',
            component: Product,
            exact: true
        },
        {
            path: '/login',
            component: Login,
            exact: true
        },
        {
            path: '/register',
            component: Register,
            exact: true
        }
    ],
    privateRoutes: [
        {
            path: '/profile',
            component: Profile,
            exact: true
        },
        {
            path: '/user/products',
            component: UserProducts,
            exact: true
        },
    ],
    redirects: [
        {
            from: '/people',
            to: '/profile',
            status: 301
        }
    ]
} 