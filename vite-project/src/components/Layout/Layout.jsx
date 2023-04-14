import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../index'
import '../../App.scss'

const Layout = () => {
    return (
        <div className="app">
            <Header />

            <div className="container">
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}


export default Layout;