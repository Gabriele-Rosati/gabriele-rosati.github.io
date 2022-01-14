

import React from 'react'
import { Container, Button, Icon, Header, Grid, Divider } from 'semantic-ui-react'


const style = {
    h1: {
      fontSize: 40,
      color: 'white',
    },
    h2: {
        color:'white',
    },
  }

const Footer = () => (
    <div id='footer'>
        <Container>
        <Grid  centered columns={1} stackable doubling>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <Header style={style.h1}>Contact</Header>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column textAlign='centre'>
                        <Button icon href = 'https://twitter.com/_GabrieleRosati' id ='button'>
                        <Icon name='twitter' size='huge' style={style.h2}/>
                        </Button>
                        <Button icon href='mailto:gabriele.rosati00@yahoo.com' id ='button2' >
                        <Icon name='mail' size='huge' style={style.h2}/>
                        </Button>
                    <Divider />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column textAlign='centre'>
                        <Button icon href ='https://github.com/Gabriele-Rosati' id ='button'>
                        <Icon name='github' size='huge' style={style.h2}/>
                        </Button>
                        <Button icon href='https://www.linkedin.com/in/gabriele-rosati-817374228/' id ='button2'>
                        <Icon name='linkedin' size='huge' style={style.h2}/>
                        </Button>
                    <Divider />
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Container>
    </div>
)

export default Footer