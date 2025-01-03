import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

// Propsの型定義
interface ApiKeyFormProps {
  open: boolean;
  onClose: () => void;
  setApiKey: (key: string) => void;
}

const ApiKeyForm: React.FC<ApiKeyFormProps> = ({ open, onClose, setApiKey }) => {
  const [key, setKey] = useState('');

  const handleSave = () => {
    setApiKey(key);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter API Key</DialogTitle>
      <DialogContent>
        <TextField
          label="API Key"
          variant="outlined"
          fullWidth
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApiKeyForm;