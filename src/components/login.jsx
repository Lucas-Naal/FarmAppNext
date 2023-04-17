import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PostData from '@/GlobalComponents/post';
import { Button, Form, Grid, Header, Image, Card, Container } from 'semantic-ui-react';

const Login = () => {

return  (

  <Container style={{width:'50em' ,paddingTop: '20em'}}>
     <Card fluid  centered style={{borderRadius: '10px', boxShadow: '0.5em 0.5em 0.5em 0.5em rgba(0, 0, 0, 0.5)',padding: '1em'}}>
      <PostData/>
     </Card>
  </Container>
)

};

export default Login;
