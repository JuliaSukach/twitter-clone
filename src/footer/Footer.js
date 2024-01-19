import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/footer/Footer.css'
import '../css/home/Home.css'

function Footer() {
    return (
        <div className="footer container">
            <Navbar className="navbar container">
                <Nav.Link href="https://twitter.com/en/tos" target="_blank">About</Nav.Link>
                <Nav.Link href="https://help.twitter.com/en/using-x/download-the-x-app" target="_blank">Download the X app</Nav.Link>
                <Nav.Link href="https://help.twitter.com/en" target="_blank">Help Centre</Nav.Link>
                <Nav.Link href="https://twitter.com/en/tos" target="_blank">Terms of Service</Nav.Link>
                <Nav.Link href="https://twitter.com/en/privacy" target="_blank">Privacy Policy</Nav.Link>
                <Nav.Link href="https://help.twitter.com/en/rules-and-policies/x-cookies" target="_blank">Cookie Policy</Nav.Link>
                <Nav.Link href="https://help.twitter.com/en/resources/accessibility" target="_blank">Accessibility</Nav.Link>
                <Nav.Link href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo" target="_blank">Ads info</Nav.Link>
                <Nav.Link href="https://blog.twitter.com/" target="_blank">Blog</Nav.Link>
                <Nav.Link href="https://status.twitterstat.us/" target="_blank">Status</Nav.Link>
                <Nav.Link href="https://careers.twitter.com/en" target="_blank">Careers</Nav.Link>
                <Nav.Link href="https://about.twitter.com/en/who-we-are/brand-toolkit" target="_blank">Brand Resources</Nav.Link>
                <Nav.Link href="https://business.twitter.com/en/advertising.html?ref=gl-tw-tw-twitter-advertise" target="_blank">Advertising</Nav.Link>
                <Nav.Link href="https://business.twitter.com/" target="_blank">Marketing</Nav.Link>
                <Nav.Link href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness" target="_blank">X for Business</Nav.Link>
                <Nav.Link href="https://developer.twitter.com/en" target="_blank">Developers</Nav.Link>
                <Nav.Link href="https://twitter.com/i/directory/profiles" target="_blank">Directory</Nav.Link>
                <Nav.Link href="https://twitter.com/settings" target="_blank">Settings</Nav.Link>
                <Nav.Link>© 2024 Julia Corp.</Nav.Link>
            </Navbar>
        </div>
    )
}

export default Footer
