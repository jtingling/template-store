import Container from 'react-bootstrap/Container'

export default function TitleCard({ title, description }) {
    return (
        <Container className="position-absolute top-50 start-50 translate-middle">
            <div className="text-center bg-dark text-white p-4 rounded opacity-75 ">
                <h1 className='opacity-100 pb-3'>{title}</h1>
                <p className="text-center mx-5">{description}</p>
            </div>
        </Container>
    )
}