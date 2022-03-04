import { Router}  from 'express' 
import Task from '../models/Task'
import {taskToggleDone,
        renderTasks,
        createTask,
        renderTaskEdit,
        editTask, 
        deleteTask}  from '../controllers/tasks.controller'
const router = Router();

router.get('/',renderTasks);
router.post('/tasks/add',createTask);
router.get("/tasks/:id/edit",renderTaskEdit);
router.post('/tasks/:id/edit',editTask);
router.get('/tasks/:id/delete',deleteTask)
router.get('/tasks/:id/toggleDone',taskToggleDone)

export default router;

