import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { useRouter } from 'next/router';

interface Article {
  id: string;
  title: string;
  created_at: string;
  rendered_body: string;
}

const ArticleItem: React.FC<{ article: Article }> = ({ article }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${article.id}`);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(article.created_at).toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleItem;