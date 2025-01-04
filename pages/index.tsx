import React, { useState } from 'react';
import ArticleList from '../components/ArticleList';
import ApiKeyForm from '../components/ApiKeyForm';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Home = () => {
  const [apiKey, setApiKey] = useState('');
  const [open, setOpen] = useState(false);

  const handleApiKeyButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Qiita Articles
          </Typography>
          <Button color="inherit" onClick={handleApiKeyButtonClick}>
            Set API Key
          </Button>
        </Toolbar>
      </AppBar>
      <ArticleList apiKey={apiKey} />
      <ApiKeyForm open={open} onClose={handleClose} setApiKey={setApiKey} />
    </div>
  );
};

export default Home;