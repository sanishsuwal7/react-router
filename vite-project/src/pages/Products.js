import { Link } from "react-router-dom"

const PRODUCTS = [
    {id: 'p1', titlt:'Product 1'},
    {id: 'p2', titlt:'Product 2'},
    {id: 'p3', titlt:'Product 3'}
];

export default function Products() {
    return (
        <>
            <h1>My Products Page</h1>
            <ul>
                {PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.titlt}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}