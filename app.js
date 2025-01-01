require('dotenv').config();

const express = require('express');
const connectDB = require('./db/connection');
const router = require('./routers/blogRouters');
const PORT = 3000;
const app = express();

app.use(express.json());
app.use('/api',router);

connectDB();
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
})