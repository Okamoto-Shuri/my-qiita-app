/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import ArticleItem from './ArticleItem';
import SearchBar from './SearchBar';

interface Article {
  id: string;
  title: string;
  created_at: string;
  rendered_body: string;
}

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://qiita.com/api/v2/items', {
          params: { query: searchQuery, per_page: 20 },
        });
        console.log(response.data);  // 追加: レスポンスデータをコンソールに出力
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, [searchQuery]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Qiita Articles
      </Typography>
      <SearchBar setSearchQuery={setSearchQuery} />
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <ArticleItem article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticleList;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import ArticleItem from './ArticleItem';
import SearchBar from './SearchBar';

interface Article {
  id: string;
  title: string;
  created_at: string;
  rendered_body: string;
}

interface ArticleListProps {
  apiKey: string;
}

const ArticleList: React.FC<ArticleListProps> = ({ apiKey }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const config: any = {
          params: { query: searchQuery, per_page: 20 },
        };
        if (apiKey) {
          config.headers = { Authorization: `Bearer ${apiKey}` };
        }

        const response = await axios.get('https://qiita.com/api/v2/items', config);
        console.log(response.data);  // 追加: レスポンスデータをコンソールに出力
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    fetchArticles();
  }, [searchQuery, apiKey]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Qiita Articles
      </Typography>
      <SearchBar setSearchQuery={setSearchQuery} />
      <Grid container spacing={3}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <ArticleItem article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ArticleList;