import { HomePage } from './pages/HomePage'
import { ExplorePage } from './pages/ExplorePage'
import { SellerPage } from './pages/SellerPage'
import { GigDetails } from './pages/GigDetails'
import { GigAdd } from './pages/GigAdd'

const routes = [
    {
        path: '/',
        component: HomePage,
        label: 'Home 🏠',
    },
    {
        path: '/explore',
        component: ExplorePage,
        label: 'Explore',
    },
    {
        path: '/start_selling',
        component: SellerPage,
        label: 'Seller Page',
    },
    {
        path: '/gig_details/:gigId',
        component: GigDetails,
        label: 'Gig Details',
    },
    {
        path: '/gig/add/',
        component: GigAdd,
        label: 'Gig Add',
    },
    {
        path: '/gig/add/:gigId',
        component: GigAdd,
        label: 'Gig Add',
    },
]

export default routes