import {makeStyles} from "@material-ui/styles"

/* Hoja de estilos*/
const useStyles = makeStyles(theme => ({
    textField: {
        height: "2.5em",
        width: "75%",
        margin: "4px 0% 4px 0%",
        borderRadius: "5px",
        fontSize: "100%",
        padding: "0px 10px 0px 10px"
    },
    textFieldnormal: {
        border: "2px solid black",
    },
    textFielderror: {
        border: "3px solid red"
    },
    tituloError:{
        fontSize: ".7em",
        textAlign: "center",
        color: "#ce0606",
    },
    containerError:{
        background: "#ffcccc",
        borderRadius: "10px",
        border: "2px solid #ce0606",
        marginLeft: "18%",
        marginRight: "20%",
        marginTop: "10px",
        padding: "1px 15px 1px 15px"
    },
    textoMissdata:{
        fontSize:" .7em",
        textAlign: "left",
        marginLeft: "10px",
        marginTop: "0px",
        color: "#ff1e00"
    },
    containerMissdata:{
        padding: ".05em",
        width: "80%"
    }
}))

export {useStyles};