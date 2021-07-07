import aboutUsContent from '../data/aboutusContent.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function AboutUs() {
    return (
        <Container className="mt-5 pt-5 text-left w-70 m-auto">
            {
                aboutUsContent.map((content, idx) => {
                    if (idx < 3) {
                        return (
                            <Row>
                                <h2>{content.title}</h2>
                                <p>{content.content}</p>
                            </Row>
                        )
                    } else if (idx >= 3) {
                        return (
                            <Row>
                                <h2>{content.title}</h2>
                                <ol key={idx}>
                                    {
                                        content.content.map((item) => {
                                            return <li>{item}</li>
                                        })
                                    }
                                </ol>
                            </Row>
                        )
                    }
                })
            }
        </Container>
    )
}