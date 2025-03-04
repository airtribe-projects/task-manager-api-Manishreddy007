const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./task.json');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});

app.get('/tasks', (req, res) => {
   
   res.status(200).json(tasks.tasks);
});

app.get('/tasks/:id',(req,res)=>{
    
    const id = Number(req.params.id); 
    console.log(id);
    if (isNaN(id) && id === undefined) {
        return res.status(400).json({ error: 'Invalid ID' });
    };
    const taskList = tasks.tasks;
    console.log(taskList) 
    const task = taskList.find(task => task.id === id);
    console.log(task);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
    
})


app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    const newTask = {
        id: tasks.tasks.length + 1,
        title,
        description,
        completed: false
    };
    tasks.tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const { title, description ,completed} = req.body;
      return res.status(400).json({ error: 'Invalid ID' });
    
    const taskList = tasks.tasks;
    const task = taskList.find(task => task.id === id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    console.log(completed);
    if (!title || !description  ) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    if(typeof(completed) !== 'boolean'){
        return res.status(400).json({ error: 'completed must be a boolean' });
    }
    task.title = title;
    task.description = description;
    task.completed = completed;
    res.status(200).json(task);
});
app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid ID' });
    }
    const taskList = tasks.tasks;
    const taskIndex = taskList.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    taskList.splice(taskIndex, 1);
    res.status(200).send();
});

module.exports = app;