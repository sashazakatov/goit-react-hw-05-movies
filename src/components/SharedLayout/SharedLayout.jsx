import { Suspense } from 'react'
import { Outlet } from "react-router-dom";

import { Header, Link, Section } from "./SharedLayout.styled";

import Loader from 'components/Loader';

const SharedLayout = () => {
    return(
        <>
            <Header>
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'movies'}>Movies</Link>
                </nav>
            </Header>
            <Section >
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                </Suspense>
            </Section>
        </>
    )
}
export default SharedLayout;