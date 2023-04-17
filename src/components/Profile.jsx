import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container,Grid, Card, Image, CardContent } from 'semantic-ui-react';
import 'typeface-montserrat';

const User = {
  Username: 'Aureum',
  LastName: 'S495',
  fechaUnion: new Date(),
  work: 'Dev'
};
const image_src = 'https://play-lh.googleusercontent.com/JDDe-clbl4Vpe3ZDmJP5zympGmI4HdjtNwwc03ZbkGezSzuODxYwjFAoFmn2ugdxWxI';

const Profile = () => {
  return (
    <>
      <Container style={{ paddingTop: '15em' }}>
  <Card style={{borderRadius: '10px', boxShadow: '0.5em 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.5)'}}  centered>
    <Card.Content>
      <Grid>
        <Grid.Column style={{backgroundColor: '#00695c'}} width={7}>
          <Image size='' alt='' src={image_src} />
        </Grid.Column>
        <Grid.Column style={{ backgroundColor: '#f8bbd0', marginRight: '0', marginLeft: '0' }} width={8}>
  <CardContent style={{ fontFamily: 'Montserrat, sans-serif' }} content={`${User.LastName} ${User.Username}`} />
  <CardContent style={{ fontFamily: 'Montserrat, sans-serif' }} content={`${User.fechaUnion.toLocaleDateString()}`} />
  <CardContent style={{ fontFamily: 'Montserrat, sans-serif' }} content={`${User.work}`} />
</Grid.Column>
      </Grid>
    </Card.Content>
  </Card>
</Container>
    </>
  );
};

export default Profile;
