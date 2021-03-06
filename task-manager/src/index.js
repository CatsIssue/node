require('./db/mongoose');
require('./models/task');

const express = require('express');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

// app.set(express.static());

app.use(express.json());

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.status(201).send(users);
    }).catch((e) => {
        res.status(500);
        res.send(e);
    });
});

app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if(!user) {
            return res.status(404).send();
        }

        res.status(200).send(user); 
    }).catch((e) => {
        res.send(e);    
    })
    console.log(req.params);
});

app.post('/users', (req, res) => {

    const user = new User(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.status(400);
        res.send(e);
    });
});

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.status(200).send(tasks);
    }).catch((e) => {
        res.status(500).send(e);
    });
});

app.get('/tasks/:id', (req, res) => {
    const taskID = req.params.id;

    Task.findById(taskID).then((task) => {
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    }).catch((e) => {
        res.status(500).send(e);
    });
});

app.listen(port, () => {
    console.log('SERVER run correctly on port: ' + port);
});