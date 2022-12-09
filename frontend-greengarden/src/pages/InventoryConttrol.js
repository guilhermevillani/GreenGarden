import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';


function InventoryConttrol() {

  return (
    <div>


      <h3 style={{margin: 2}}>Cadastro de Estoque</h3>
      

      <Grid sx={{mt: 3}} container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth id="standard-password-input" label="Nome" type="text" autoComplete="current-password" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth id="standard-password-input" label="Tipo" type="text" autoComplete="current-password" variant="outlined" />
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth id="standard-number" label="valor" type="number" InputLabelProps={{ shrink: true, }} variant="outlined" />
        </Grid>
        <Grid item xs={3}>
        <TextField  fullWidth id="standard-number" label="Quanttidade" type="number" InputLabelProps={{ shrink: true, }} variant="outlined" />
        </Grid>
      </Grid>

      <Grid item xs={3}>
      <Button sx={{mt: 3, mb: 2}} type="submit"  variant="contained"> Salvar</Button>
        </Grid>
    </div>
  );

}

export default InventoryConttrol;