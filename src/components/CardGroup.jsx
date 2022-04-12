import { Container } from 'react-bootstrap';
import { ProductCard } from './ProductCard';

const CardGroup=({products})=>{
    console.log(products)
    return (
        <Container className="d-flex justify-content-center align-items-center flex-wrap pt-3 mb-4" style={{gap:"40px"}}>
            {products && products.sort((a,b)=>{return b.productBasePrice - a.productBasePrice}).map((product)=>{
                return <ProductCard product={product} />
            })}
        </Container>
    )
}

export {CardGroup}