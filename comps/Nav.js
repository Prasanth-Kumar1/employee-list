import Link from 'next/link'

const Nav = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Employees List</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/employees"><a>Employee Listing</a></Link>
        </nav>
     );
}
 
export default Nav;