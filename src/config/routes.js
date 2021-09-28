import { ComingSoon, ComingSoonRegister, RegisteredUserPage } from "../pages";

const routes = [
    {
        path: '/',
        component: ComingSoon,
        isRegis: false,
    },
    {
        path: '/comingsoonregister',
        component: ComingSoonRegister,
        isRegis: false,
    },
    {
        path: '/register',
        component: RegisteredUserPage,
        isRegis: true,
    },
];

export default routes;