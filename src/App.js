import React, { useState } from "react";
import { render } from "react-dom";
import ResponsiveMenu from './components/responsiveMenu';
import Sidebar from './components/sidebar';
import Card from './components/card'
import {Header, Divider, Container} from 'semantic-ui-react'
import Image2 from './components/image2'
import Experience from './components/experience'
import Header2 from './components/header2'
import Footer from './components/footer';
import cx from 'classnames';
import './index.css';

const style = {
  h1: {
    fontSize: 70,
  },
}

function App() {

    const [toggle, setToggle] = useState(false);

    const classes = cx(
      'pusher',
      'bottom',
      {'dimmed': toggle}
    );

    function toggleMenu() {
      setToggle(!toggle);
    }

    return (
      <div>
        <ResponsiveMenu onToggleMenu={toggleMenu}/>
        <Sidebar toggleMenu={toggle}  onToggleMenu={toggleMenu}/>
        <Header2/>
        <div className="ui  pushable attached" id="home">
          <div className={classes}>

          <Divider/>
          <Container>
            <div class='mt-36 sm:mt-0'>
            <Header as='h1' color='orange' textAlign='center' size='huge' style={style.h1}>Hello, I'm Gabriele!</Header>
            </div>
            <Divider/>
            <Image2/>
            <Divider/>
            <Experience/>
            <Divider id='projects'/>
            <Card/>
            <Divider/>
          </Container>
          <Footer/>
          </div>
        </div>
      </div>
    );
}

export default App;