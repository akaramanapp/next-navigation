import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

const btnOnClick = () => {
    fetch("https://next-navigation-five.vercel.app/api/hello").then((response) => {
        console.log(response.json())
    })
}

const about = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button onClick={btnOnClick} variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    )
}

export default about;