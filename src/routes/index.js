//import Layout
import { HeaderOnly } from '~/components/Layout';
//
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Login from '~/components/Layout/components/SideBar/Login/Login';
import Register from '~/components/Layout/components/SideBar/Register/Register';
import ForgotPassword from '~/components/Layout/components/SideBar/Login/ForgotPassword';
//public route
const publicRoute = [
    {
        path: '/',
        component: Home,
    },
    ,
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/login',
        component: Login,
        layout: HeaderOnly,
    },
    {
        path: '/login/forgot_password',
        component: ForgotPassword,
        layout: HeaderOnly,
    },
    {
        path: '/register',
        component: Register,
        layout: HeaderOnly,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
    },
];

const privateRoute = [];
export { publicRoute, privateRoute };
