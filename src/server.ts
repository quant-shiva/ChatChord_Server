import app from "./app";
import logger from "./config/logger";

let Port: number = 4000;

if(process.env.port){
    Port = parseInt(process.env.port);
}

app.listen(Port,"0.0.0.0",()=>{
    logger.info(`server is running at port ${Port}`)
})