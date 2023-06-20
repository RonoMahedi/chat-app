import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }
);

console.log(process.env.MONGO_URL);

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    }
);

// t