import Home from './home';
import NotFound from './404';

const pages = [
    {
        id: "home",
        path: "/",
        subtitle : "Home",
        comp : Home
    },
    {
        id : "404",
        path : "*",
        subtitle : "404",
        comp : NotFound
    }
];

export default pages;