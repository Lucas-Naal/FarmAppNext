import { useState } from 'react';
import axios from 'axios'; 
import { Button, Form, Grid, Image, Card, Segment } from 'semantic-ui-react';

const PostData = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const animegirl = 'https://res.cloudinary.com/dc4mgv156/image/upload/v1681404966/diseno-ilustracion-vector-personaje-estilo-anime-chica-joven-chica-anime-manga_147933-93-removebg-preview_gzufmq.png'
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5249/api/Auth/login', formData, {
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
     
    } catch (error) {
      console.log(error);
    }
  };


  return (
    
   <Grid>
   <Grid.Column style={{backgroundColor: '#00695c'}} width={5}>
    <div style={{ width: '15em', height: '20em', padding: '0.5em', paddingRight: '1em'}}>
      <Image  style={{width:'100%', height: '100%'}} alt='' src={animegirl} ></Image>
    </div>
   </Grid.Column>
   <Grid.Column  style={{backgroundColor:'#f8bbd0'}} width={11}>
   <Card style={{borderRadius: '10px', marginLeft: '3em',width: '29em',height: '19em', padding: '1em 1em 1em 1em'}} >
  <Form onSubmit={handleSubmit} style={{height: '100%'}}>
    <Form.Input
      fluid
      icon="user"
      iconPosition="left"
      placeholder="Correo Electronico"
      name="email"
      value={formData.email}
      onChange={handleInputChange}
    />
    <Form.Input
      fluid
      icon="lock"
      iconPosition="left"
      placeholder="Contraseña"
      type="password"
      name="password"
      value={formData.password}
      onChange={handleInputChange}
    />
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '5em'}} >
      <Button type="submit">Submit</Button>
    </div>
  </Form>
</Card>
    </Grid.Column>
   </Grid>
  );
};

export default PostData;
