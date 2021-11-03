import { Container, Card, Typography, CardContent } from '@mui/material';
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const postsData = await axios.get('http://3.25.141.10:8000/api/posts');

    const postsList = postsData.data.data;
    setPosts(postsList);
  }, []);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container>
      {posts.map(post => (
        <Card key={post.id} sx={{ mb: 5 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {post.user}
            </Typography>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2">
              {post.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Posts;
