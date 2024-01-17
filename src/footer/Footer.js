import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/footer/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <Navbar className="navbar">
                <Nav.Link href="/user">© 2024 Julia Corp.</Nav.Link>
            </Navbar>
        </div>
    )
}

export default Footer
