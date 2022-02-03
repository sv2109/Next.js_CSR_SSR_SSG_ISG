import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from "next/router"

import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

const Layout = ({children}) => {
  
  const { asPath } = useRouter()

  return (
    <div className="wrapper position-relative min-vh-100"  style={{paddingBottom: '100px'}}>
      <Head>
        <title>Movies App (Next.js example)</title>
        <meta name="description" content="This is movies app, created for tested Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="/">Movies App (Next.js)</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto justify-content-end">
              <Link href="/" passHref>
                <Nav.Link active={asPath === '/'}>Search movies (CSR)</Nav.Link>
              </Link>
              <Link href="/random" passHref>
                <Nav.Link active={asPath === '/random'}>Random from the best (SSR)</Nav.Link>
              </Link>              
              <Link href="/best" passHref>
                <Nav.Link active={asPath === '/best'}>The best movies (SSG)</Nav.Link>
              </Link>              
              <Link href="/soon" passHref>
                <Nav.Link active={asPath === '/soon'}>Coming soon (ISR)</Nav.Link>
              </Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main>
        <Container>
          {children}
        </Container>        
      </main>

      <footer className="p-3 pb-0 mt-4 bg-dark text-white text-center position-absolute w-100 bottom-0">
        <Container>
          <p className="lead">Copyright &copy; 2022</p>

          <a href="#" className="position-absolute bottom-0 end-0 p-2">
            <i className="bi bi-arrow-up-circle h1 text-light"></i>
          </a>
        </Container>
      </footer>
    </div>
  )
}

export default Layout
