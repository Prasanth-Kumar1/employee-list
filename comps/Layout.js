import Nav from '../comps/Nav';
import Footer from '../comps/Footer'

const Layout = ( {children} ) => {
    return ( 
        <div className="content">
            <Nav />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;