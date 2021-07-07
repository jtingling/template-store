import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

export default function SupportContent({data}) {
    function renderAccordion() {
        return (
            <Accordion className="text-left w-70 m-auto">
                {
                    data.map((section, idx) => {
                        return (
                            <Card key={idx}>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey={idx.toString()}>
                                    {section.title}
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={idx.toString()}>
                                    <Card.Body>
                                        {section.content}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                        )
                    })
                }
            </Accordion>
        )
    }
    return (
        <>
            {renderAccordion()}
        </>

    )
}