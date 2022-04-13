import { Container } from 'react-bootstrap';
import { ProductCard } from './ProductCard';

const CardGroup=()=>{
    return (
        <Container className="d-flex justify-content-center align-items-center flex-wrap pt-3 mb-4" style={{gap:"40px"}}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </Container>
    )
}

export {CardGroup}