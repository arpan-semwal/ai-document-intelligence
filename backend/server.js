const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const connectDB = require('./config/db');
const { version } = require('mongoose');

dotenv.config();

const app = express();

connectDB();


app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Routes

app.use('/api/auth',require('./routes/auth'));

app.get('/' , (req ,res) => {
    res.json({
        message:"Ai Document Intelligence API",
        version:'1.0.0',
        status:'Running'
    });
});


app.get('/health' , (res , req) => {
    res.json({status:"OK" , timestamp:new Data()});
})




//Error handler middleware

app.use((err ,req ,res ,next) => {
    console.error(err.stack);
    res.status(500).json({
        message:"Something went wrong!",
        error:process.env.NODE_ENV === 'development' ? err.message : {}
    });
});


const PORT = process.env.PORT || 5000;


app.listen(PORT , () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV}`);
})