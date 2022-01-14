import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'


const style = {
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 25,
    },
    h3: {
      fontSize: 20,
    },
    h4: {
      fontSize: 20,
    },
  }

const ContainerExampleText = () => (
    <div id='Experiences'>
        <Header textAlign='center' style={style.h1} color='orange'>Experiences</Header>
        <Grid columns={1} textAlign='center'>
            <Grid.Row>
            <Grid.Column>
                <h1 style={style.h2}> <strong>University</strong></h1>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
                <h1 style={style.h3}>At the University of Siena I took two courses on programming. </h1>
                <br></br>
                <h1 style={style.h3}><strong>Computer science fundamentals:</strong> in this course I learned what algorithms, binary search trees and Boolean algebra are and how they can be used in the context of programming.</h1>
                <br></br>
                <h1 style={style.h3}><strong>Programming fundamentals:</strong>This course was both theoretical and practical. 
                    In the theoretical part I learned what is the differences between the various programming languages ​​and the process behind the programming itself.
                    In the practical part I started to create my first programs in the C language.
                </h1>
            </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            <Grid.Column>
                <h1 style={style.h2}> <strong>Udemy</strong></h1>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
                <h1 style={style.h3}>On the Udemy platform I took a course on ethereum and solidity. 
                 This course introduced me to the ethereum blockchain by briefly explaining how it works and its main features.
                 The course mainly taught me to program in solidity and to create my first smart contracts. During the course I built the <a href='#Projects'><strong>CrowdCoin</strong></a> project using solidity react and javascript.
                </h1>
                <a style={style.h3} href='https://www.udemy.com/share/1013Fs3@PLW7ymEx822AgNOii2MT2N7QEGcu8Ikyq919BXc1rCiZGIozQT6wWLhHcPwZg6s6/'><strong>View Course</strong></a>
            </Grid.Column>
            </Grid.Row>

            <Grid.Row>
            <Grid.Column>
                <h1 style={style.h2}> <strong>Chainlink Hackathon</strong></h1>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
                <h1 style={style.h3}>From 22 October to 10 November 2021 I participated in the chainlink hackathon together with a senior developer
                 <a href='https://riccardopersiani.com/'><strong>Riccardo Persiani</strong></a>.
                 Here I put into practice what I learned during the online course and during my studies on the blockchain and especially on NFTs.
                 In the realization of the project I learned to use the hard-hat development environment to write efficient tests for smart contracts and to create ERC20, ERC721 and ERC1155 tokens. 
                 I also learned to work in a group using the main github functions.
                 Our project <a href='#Projects'><strong>dExhibition</strong></a> won the Chainlink On the Rise award. 
                </h1>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default ContainerExampleText