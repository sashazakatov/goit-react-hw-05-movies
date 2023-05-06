import { Suspense } from 'react'
import { Outlet, NavLink } from "react-router-dom";

import Loader from 'components/Loader';

const SharedLayout = () => {
    return(
        <>
            <header>
                <nav>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'movies'}>Movies</NavLink>
                </nav>
            </header>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </>
    )
}
export default SharedLayout;