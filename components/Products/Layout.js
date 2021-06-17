import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Product from './Product'
export default function Layout({ products, category }) {
    return (
        <Container fluid>
            <Row className='row justify-content-center'>
                {
                    products.map((product) => {
                     return <Product product={product} category={category} />
                    })
                }
            </Row>
        </Container>
    )
}