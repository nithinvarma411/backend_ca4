import express, {Router} from 'express';

const app = express();

const router = Router();

const apiWorking = async (req, res) => {
    res.status(200).send({"message": "API is working"});
} 

const time = async (req, res) => {
    res.status(200).send({"server time": new Date().toISOString()})
}

app.get("/", apiWorking);
app.get("/time", time);

app.listen(3000, async (req, res) => {
    console.log("app running");
    
})