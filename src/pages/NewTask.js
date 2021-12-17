import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useCallback, useEffect } from 'react';

export default function NewTask() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = useCallback((e)=> {
    setTask(e.target.value);
  },[]);

  const handleSave = useCallback((e)=> {
    setList([
      ...list, 
      task
    ]);

    setTask('');

  },[list,task]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <TextField
                multiline
                value={task}
                onChange={handleInputChange}
                fullWidth
                maxRows={4}
                placeholder="Escreva aqui a sua tarefa"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button 
              variant="contained" sx={{ mr: 1 }}
              onClick = {handleSave}
              >
                Adicionar tarefa
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        Nenhuma tarefa adicionada até o momento
      </Typography>
    </Paper>
  );
}