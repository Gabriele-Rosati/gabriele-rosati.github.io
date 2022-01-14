import React from 'react'
import { Container, Grid, Header, Image, Segment } from 'semantic-ui-react'

const style = {
  h1: {
    fontSize: 40,
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 20,
  },
}

const GridExampleColumnCount = () => (
  <Grid columns={3} stackable>
    <Grid.Row>
      <Grid.Column textAlign='center'>
          <Header style={style.h1}>About me</Header>
          <p style={style.h2}>I am attending the second year of computer engineering at the University of Siena. My main interests are in videogames and the world of blockchain. I started programming in the solidity language by following an online course and collaborating with a senior developer. </p>
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/io.jpg' centered circular size='medium'/>
      </Grid.Column>
      <Grid.Column textAlign='center'>
          <Header style={style.h1}>Details</Header>
          <p style={style.h3}><strong>Name:</strong></p>
          <p style={style.h4}>Gabriele Rosati</p>
          <p style={style.h3}><strong>Age:</strong></p>
          <p style={style.h4}>21</p>
          <p style={style.h3} id='experience'><strong>Location:</strong></p>
          <p style={style.h4}>Orvieto, Italy</p>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleColumnCount