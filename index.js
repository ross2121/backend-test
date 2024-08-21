const express  = require("express")
const app = express();
const port = 9000;
app.use(express.json());
app.get("/test",(req,res) =>{
    res.send("hello testing")
})
app.listen(port,console.log(`Server is running on ${port}`))
