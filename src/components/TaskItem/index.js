import React from 'react';
import { MenuItem, ListItemIcon, ListItemText, Checkbox, IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskItem = ({task, index, handleTaskDeletion }) => {
    return(
      <MenuItem>
        <ListItemIcon>
          <Checkbox defaultChecked />
        </ListItemIcon>
        <ListItemText>{task}</ListItemText>
        <IconButton aria-label="delete" color="primary" component="span" onClick={() => handleTaskDeletion(task.index)}>
          <DeleteIcon />
        </IconButton>
      </MenuItem>
    )
}

export default TaskItem;