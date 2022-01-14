import React from 'react'
import { Button, Card, Image, Icon, Divider, Header } from 'semantic-ui-react'
import dExhibition from '../images/dExhibition.png'
import CrowdCoin from '../images/crowdcoin2R.png'



const style = {
  h1: {
    width: '30em',
    margin: '4em 4em 2em',
    background: 'orange',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  h4:{
    fontSize: 40,
  },
  last: {
    marginBottom: '300px',
  },
}

const CardExampleGroups = () => (
  <div id='Projects'>
    <Header as='h1' color='orange' textAlign='center'  style={style.h4}>Projects</Header>
    <Card.Group centered>
      <Card style={style.h1}>
        <Card.Content>
        <Divider/>
          <Image
            verticalAlign='top'
            size='huge'
            src={dExhibition}
          />
          <Divider/>
          <Card.Header>dExhibition</Card.Header>
          <Card.Meta>NFT Marketplace</Card.Meta>
          <Card.Description>
            <strong>
             The platform dExhibition allows NFTs to be not just static elements of a marketplace but brings them to life empowering curators to be rewarded for their curation job on the platform by getting a cut on the curated NFT sale.
            </strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button icon color='green' size='large' fluid href='https://github.com/the-nifty-lair/monorepo'>
              <Icon name='github' color='black' size='large'></Icon>
              <p>Open Project on Github</p>
          </Button>
        </Card.Content>
      </Card>
      <Card style={style.h1}>
        <Card.Content>
          <Divider/>
          <Image
            size='huge'
            src={CrowdCoin}
          />
          <Divider/>
          <Card.Header>CrowdCoin</Card.Header>
          <Card.Meta>Kickstarter app for the ethereum blockchain</Card.Meta>
          <Card.Description>
            <strong>        
            CrowdCoin is a platform that allows people to create campaigns to finance their own projects within the ethereum blockchain. Anyone who invests in a project has the ability to approve the expense requests created by the campaign creator and have the ability to see how the money is being spent.
            </strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button icon color='green' size='large' fluid href='https://github.com/Gabriele-Rosati/Kickstart'>
              <Icon name='github' color='black' size='large'></Icon>
              <p>Open Project on Github</p>
          </Button>
        </Card.Content>
      </Card>
    </Card.Group>
  </div> 
)

export default CardExampleGroups


