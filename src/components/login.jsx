import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PostData from '@/GlobalComponents/post';
import { Button, Form, Grid, Header, Image, Card, Segment } from 'semantic-ui-react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSuccess = (response) => {
    console.log('Success:', response);
  };

  const handleError = (error) => {
    console.error('Error:', error);
  };

  const handleSubmit = () => {
    // Aquí puedes validar los datos del formulario antes de enviarlos
    PostData({
      url: 'http://localhost:5249/api/Person',
      data: formData,
      onSuccess: handleSuccess,
      onError: handleError,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="left">
          <Image alt="" src="/logo.png" /> Inicia Sesion En Tu Cuenta
        </Header>
        <Card fluid style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />


            
            </Segment>
          </Form>
          <PostData
        url="http://localhost:5249/api/Person"
        data={formData}
        onSuccess={handleSuccess}
        onError={handleError}
      />
        </Card>
      </Grid.Column>
      
    </Grid>
  );
};

export default Login;
