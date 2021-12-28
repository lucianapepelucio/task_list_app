import * as React from 'react';
import { AppBar, Toolbar, Typography, Paper, Grid, Button, TextField} from '@mui/material';
import { useState, useCallback, useEffect } from 'react';

export default function NewTask() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const handleInputChange = useCallback((e)=> {
    setTask(e.target.value);
  },[]);

  const handleSave = useCallback((e)=> {
    setList((previousValue) =>[
      ...previousValue, 
      task
    ]);

    setTask('');

  },[task]);

  useEffect(() => {
    console.log(task); //imprimir a lista de tarefas
  }, [task]);

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