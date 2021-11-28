const express = require('express');
const app = express();


var cors = require('cors');
app.use(cors())
app.use(express.static('view'));

app.use(express.json());

const port=process.env.PORT || 5000;
app.listen(port, function(){
    console.log(`server listening on port ${port}`);
})

app.get('/', (req,res)=>{
    res.sendFile("E:\\Snippets\\Backend\\Twilio\\Code\\view\\index.html")
})

const userRouter = require("./Routers/userRouter")
app.use('/user', userRouter)




