import styles from '../../styles/Employees.module.css';
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { employees: data}
    }
}

const AllEmployees = ( {employees} ) => {
    return (
        <>
            <Head>
                <title>Employee List | All Employees</title>
                <meta name="keyword" content="employees" />
            </Head> 
            <div>
                <h1>All Employees</h1>
                {employees.map(employee => (
                    <Link href={ '/employees/' + employee.id }  key={ employee.id }>
                        <a className={styles.single}>
                            <h3>{ employee.name }</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
     );
}
 
export default AllEmployees;