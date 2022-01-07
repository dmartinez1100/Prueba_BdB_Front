import {rutaApi} from "./dirs"
import React, { useState } from "react";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {useStyles} from "./Styles.js"
import Headerbdb from "./headerbdb"

/* Función que recibe el el formulario y retorna un diccionario donde cada llave es el nombre del input, y el valor, el contenido del input*/
const formDataToJSON = (fd) => {
    const json = {};
    Array.from(fd.entries()).forEach(([key, value]) => {
      json[key] = value;
    })
    const datas = json;
    return datas;
  }

/* Funcion que recibe un mensaje, y estilos para el contenedcor y el texto
  Retorna un div que contiene un mensaje*/
const Divmessage = ({texto,classcont, classtxt}) => {
    return(
        <div className={classcont}>
            <h1  className={classtxt}>{texto}</h1>
        </div>
    )
}

/* Componente principal (LogIn)*/
const LogInComp = () => {
    const classes = useStyles();
    const [server_error, setserver_error] = useState(false);
    const [user_inp_error, setuserinperror] = useState(false);
    const [pwd_inp_error, setpwdinperror] = useState(false);

    /* Función que recibe un JSON, lo convierte a string y envia la petición de login*/
    const Loginrequest = (jsondata) => {
      fetch(`${rutaApi}/login`, {
        method: "post",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsondata),
      })
      .then((res) => {
        if (res.ok) {
          window.location.assign("/main");
          setserver_error(false);
        }
        else{
          console.log(res.status);
          setserver_error(true);
        }
        return res.text();
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err));
    }

    /* Función que recibe todo el formulario cuando se hace Submit
      - Hace validación previa de inputs vacíos y si todo sale bien, envía la peticion de Login al backend*/
    const onSubmit = (e) => {
      setserver_error(false)
      e.preventDefault();
      let jsondata = formDataToJSON(new FormData(e.currentTarget))
      let error = false
      if (jsondata.user === ""){
        setuserinperror(true)
        error = true
      }
      else{
        setuserinperror(false)  
      }
      if (jsondata.password === ""){
        setpwdinperror(true)
        error=true
      }
      else{
        setpwdinperror(false)  
      }
      if (!error){
          Loginrequest(jsondata)
      }
    };

    /* Componente */
    return (
      <Grid container component="main" sx={{ height: '80vh',background: "white"}}>
        <Grid item xs={12} sm={5} md={5} component={Paper} elevation={20} sx={{background: "#e0e3ec"}}square>
          <Box sx={{width: "100%",display: 'flex'}}>
            <Headerbdb />
          </Box> 
          {!server_error? <></>:<Divmessage texto="invalid user os password" classcont={classes.containerError} classtxt={classes.tituloError}/>}
          <Box component="form" noValidate onSubmit={onSubmit} sx={{ paddingLeft:"8%", mt: 2}}>
            <Typography component="div" variant="h6" sx={{color: 'black', fontWeight: 600, fontSize: "100%"}}>
              user
            </Typography>
            <input
              id="user"
              name="user"
              className={`${classes.textField} ${!user_inp_error?classes.textFieldnormal:classes.textFielderror}` }
              autoFocus
              onChange = {()=>{setuserinperror(false)}}
            />
            {!user_inp_error? <></>:<Divmessage texto="please enter login" classcont={classes.containerMissdata} classtxt={classes.textoMissdata}/>}
            <Typography component="div" variant="h4" sx={{color: 'black', fontWeight: 600, fontSize: "100%"}}>
              password
            </Typography>
            <input
              name="password"
              type="password"
              id="contrasenia"
              className={`${classes.textField} ${!pwd_inp_error?classes.textFieldnormal:classes.textFielderror}`}
              onChange = {()=>{setpwdinperror(false)}}
            />
            {!pwd_inp_error? <></>:<Divmessage texto="please enter password" classcont={classes.containerMissdata} classtxt={classes.textoMissdata}/>}
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, ml:"50%", width:"30%", backgroundColor:'#0B397D'}}
            >
              login
            </Button>
          </Box>
        </Grid>
      </Grid>
    );
}
export default LogInComp;