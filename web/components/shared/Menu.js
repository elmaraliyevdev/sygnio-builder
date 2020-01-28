import React from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

const BsNavLink = props => {
  const { route, title } = props;

  return (
    <Link href={route}>
      <a className='nav-link'> {title} </a>
    </Link>
  );
};

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar expand='lg'>
        <NavbarBrand href='/'>
          <img src='../../static/images/logo-new.png' />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='navbar-nav mr-auto' navbar>
            <NavItem className='port-navbar-item'>
              <BsNavLink route='/' title='Home' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route='/features' title='Features' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route='/pricing' title='Pricing' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route='/about' title='About Us' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route='/blog' title='Blog' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BsNavLink route='/contact' title='Contact' />
            </NavItem>
          </Nav>
          <a href='#' className='btn green-btn'>
            Get started
          </a>
        </Collapse>
      </Navbar>
    );
  }
}
