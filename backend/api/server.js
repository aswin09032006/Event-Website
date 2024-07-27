const express = require('express');
const multer = require('multer');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 5000;

const dbName = 'registrationDB';


const uri = "mongodb+srv://parthis1805:Parthiban1805@registeration.j2v4mdr.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=registeration";
const collectionName = 'registrations';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

app.use(cors());

app.use(express.json());

const client = new MongoClient(uri);

app.post('/register', upload.single('paymentScreenshot'), async (req, res) => {
    console.log('Received request body:', req.body);
    console.log('Received file:', req.file);

    const registrationData = {
        name: req.body.name,
        gender: req.body.gender,
        dob: req.body.dob,
        email: req.body.email,
        phone: req.body.phone,
        regNo: req.body.regNo,
        course: req.body.course,
        hORd: req.body.hORd,
        hostelID: req.body.hostelID,
        paymentScreenshot: req.file ? req.file.path : null,
    };

    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        const result = await collection.insertOne(registrationData);
        console.log('Registration data stored in MongoDB:', result.insertedId);

        res.status(200).send('Registration successful!');
    } catch (error) {
        console.error('Error storing data in MongoDB:', error);
        res.status(500).send('Error storing data');
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});