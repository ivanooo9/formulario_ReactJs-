import React from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";

const Forms = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Formulario de Registro
      </Typography>
      <TextField
        fullWidth
        label="Nombre"
        variant="outlined"
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Correo Electrónico"
        variant="outlined"
        type="email"
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Contraseña"
        variant="outlined"
        type="password"
        required
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<CheckCircleIcon />}
        style={{ marginTop: '16px' }} // Añadir margen superior al botón
      >
        Registrarse
      </Button>
    </Container>
  );
};

export default Forms;
