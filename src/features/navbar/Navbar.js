import React from 'react';
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import { Navbar as BNavbar } from 'react-bootstrap';

export const Navbar = () => {
  return (
    <div>
      <BNavbar bg="dark" variant="dark">
        <Container style={{ justifyContent: 'center' }}>
          <Nav style={{ display: 'flex' }}>
            <Nav.Link href="/">מוצרים</Nav.Link>
            <Nav.Link href="/about">קצת עלינו</Nav.Link>
            <Nav.Link href="/users">משתמשים</Nav.Link>
            <Nav.Link href="/cart">עגלה</Nav.Link>
            <Nav.Link href="/contact">צור קשר</Nav.Link>
            <Nav.Link href="/events">אירועים</Nav.Link>
            <Nav.Link href="/login">התחבר</Nav.Link>
          </Nav>
        </Container>
      </BNavbar>
    </div>
  );
};
