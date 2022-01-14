import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

function Header(props) {
    const style = {
        h1: {
          fontSize: 25,
        },
      }
      
    return(
        <div class="divHeader block sm:hidden top attached menu overlay">
            <Menu inverted fixed='top'>
            <span class="item link grey block" onClick={props.onToggleMenu} style={style.h1}>
                <Icon name='bars'></Icon>
            </span>
            </Menu>
        </div>
    );

}

export default Header;
