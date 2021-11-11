import { createTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const theme = createTheme({
   palette:{
       primary:{
           main:blue[500]
       },
   },
   mybutton:{
       backgroundColor:"red",
       border:"2px solid black",
       color:"wheat"
   }
})