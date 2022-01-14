import React, { useEffect } from 'react';
import cn from 'classnames';
import { List } from 'semantic-ui-react';

function Sidebar(props) {

  const classes = cn(
    'ui', 'sidebar', 'overlay', 'top', 'inverted', 'menu', 'animating','attached',
    {'visible' : props.toggleMenu}
  );
  const style = {
    h1: {
      fontSize: 20,
    },
  }


  return(
    <div className={classes} id='sidebar'>
      <List>
        <List.Item as='a' href='#home' style={style.h1} onClick={props.onToggleMenu}>Home</List.Item>
        <List.Item as='a' href='#experience' style={style.h1} onClick={props.onToggleMenu}>Experiences</List.Item>
        <List.Item as='a' href='#projects' style={style.h1} onClick={props.onToggleMenu}>Projects</List.Item>
        <List.Item as='a' href='#footer' style={style.h1} onClick={props.onToggleMenu}>Contact</List.Item>
  </List>
    </div>
  );
}

export default Sidebar;