import { Outlet, NavLink } from "react-router-dom";
const SharedLayout = () => {
    return(
        <section>
            <header>
                <nav>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'movies'}>Movies</NavLink>
                </nav>
            </header>
            <Outlet/>
        </section>
    )
}
export default SharedLayout;