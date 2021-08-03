export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(employee => {
        return {
            params: { id: employee.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json();

    return {
        props: { employee: data }
    }
}

const Details = ({ employee }) => {
    return (
        <div>
            <h1>{ employee.name }</h1>
            <p>{ employee.email }</p>
            <p>{ employee.website }</p>
            <p>{ employee.address.city }</p>
        </div>
     );
}
 
export default Details;