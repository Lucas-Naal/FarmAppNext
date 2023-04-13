import { useState } from 'react';
import { Button, Form, Grid, Header, Image, Card, Segment } from 'semantic-ui-react';

const PostData = ({ url, data, onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      if (response.ok) {
        onSuccess && onSuccess(json);
      } else {
        setError(json);
        onError && onError(json);
      }
    } catch (error) {
      setError(error);
      onError && onError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <div>Error: {error.message}</div>}
      <Button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Iniciar Sesion'}
      </Button>
    </Form>
  );
};

export default PostData;
