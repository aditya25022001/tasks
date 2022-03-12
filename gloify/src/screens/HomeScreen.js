import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { Button, DialogTitle, Dialog, DialogContent, RadioGroup, Radio, FormControlLabel, Select, MenuItem } from '@mui/material'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { getTasksAction } from '../redux/getTasks'
import { Task } from '../components/Task'
import { getUsersAction } from '../redux/getUsers'
import { createTaskAction } from '../redux/createTask'

export const HomeScreen = () => {

    // dispatch instance
    const dispatch = useDispatch()

    // local state
    const [tasksRender, setTasksRender] = useState([])
    const [openCreate, setOpenCreate] = useState(false)
    const [search, setSearch] = useState("")
    const [task, setTask] = useState({
      message:"",
      due_date:"",
      due_time:"",
      priority:"",
      assigned_to:"",
      taskid:""
    })

    // Checking state
    // get tasks from the state of application
    const userGetTasks = useSelector(state => state.userGetTasks)
    const { loading:loadingTask, error:errorTask, tasks } = userGetTasks

    // get users from the state of application
    const userGetUsers = useSelector(state => state.userGetUsers)
    const { users } = userGetUsers

    // create task and update state of application
    const userCreateTask = useSelector(state => state.userCreateTask)
    const { loading:loadingCreateTask, error:errorCreateTask, success:successCreate } = userCreateTask

    // update task and update state of application
    const userUpdateTask = useSelector(state => state.userUpdateTask)
    const { loading:loadingUpdateTask, error:errorUpdateTask, success:successUpdate } = userUpdateTask

    // delete task and update state of application
    const userDeleteTask = useSelector(state => state.userDeleteTask)
    const { loading:loadingDeleteTask, success:successDelete } = userDeleteTask
    
    const createHandler = (e) => {
      e.preventDefault()
      console.log(task)
      const formData = new FormData()
      formData.append('message',task.message)
      formData.append('due_date',task.due_date+" "+task.due_time)
      formData.append('priority',task.priority)
      formData.append('assigned_to',task.assigned_to)
      setOpenCreate(false)
      dispatch(createTaskAction({formdata:formData}))
    }

    useEffect(() => {
        if(tasks.length===0){
          dispatch(getTasksAction())
        }
        if(tasks.length>0){
          setTasksRender([...tasks])
        }
    },[dispatch, tasks, successDelete, successUpdate, successCreate])

    useEffect(() => {
      dispatch(getTasksAction())
      dispatch(getUsersAction())
    },[dispatch, successDelete, successUpdate, successCreate])

    const searchBar = (e) => {
      setSearch(e.target.value)
      setTasksRender([...tasksRender.filter((each) => each.message.includes(search))])
    }

    return (
    <div>
      <h3 className='mb-3'>Mini Task Manager</h3>
      <div>
        <div className='d-flex mb-2' style={{ justifyContent: 'space-between' }}>
          <Form.Control value={search} onChange={searchBar} style={{ flex:0.98 }} placeholder="Search Task"/>
          <Button variant='contained' color='secondary'><SearchIcon/></Button>
          <Button variant='contained' color='secondary' onClick={e => setOpenCreate(true)}><AddIcon/></Button>
        </div>
      </div>
      {(errorTask || errorCreateTask || errorUpdateTask) && <Message variant="error" message={errorTask}/>}
      {successCreate && <Message variant="success" message="Task created successfully"/>}
      {successUpdate && <Message variant="success" message="Task updated successfully"/>}
      {successDelete && <Message variant="success" message="Task deleted successfully"/>}
      {loadingTask || loadingDeleteTask || loadingCreateTask ||loadingUpdateTask
        ? <Loader/> 
        : <>
          {tasksRender.length>0 && tasksRender.map((each, index) => (
            <Task
              key={index}
              id={each.id}
              assigned_to={each.assigned_to}
              assigned_name={each.assigned_name}
              priority={each.priority}
              created_on={each.created_on}
              due_date={each.due_date}
              message={each.message}
            />
          ))}
        </>
      }
      <Dialog fullWidth={true} open={openCreate} onClose={e => setOpenCreate(false)}>
        <DialogTitle>
          Create Task
        </DialogTitle>
        <DialogContent>
          <Form onSubmit={createHandler}>
            <Form.Group className='mt-2'>
              <Form.Label>Message</Form.Label>
              <Form.Control value={task.message} onChange={e => setTask({...task,message:e.target.value})} />
            </Form.Group>
            <Form.Group className='mt-2'>
              <Form.Label>Due Date</Form.Label>
              <div className='d-flex'>
                <Form.Control type="date" value={task.due_date} onChange={e => setTask({...task,due_date:e.target.value})} />
                <Form.Control type="time" value={task.due_time} onChange={e => setTask({...task,due_time:e.target.value})} />
              </div>
            </Form.Group>
            <Form.Group className='mt-2'>
              <Form.Label>Priority</Form.Label>
              <RadioGroup onChange={e => setTask({...task,priority:e.target.value})} row>
                <FormControlLabel value="1" control={<Radio color="secondary" />} label="High" />
                <FormControlLabel value="2" control={<Radio color="secondary" />} label="Medium" />
                <FormControlLabel value="3" control={<Radio color="secondary" />} label="Low" />
              </RadioGroup>
            </Form.Group>
            <Form.Group className='mt-2 d-flex' style={{ alignItems:'center' }}>
              <Form.Label className='w-50'>Assigned To</Form.Label>
                <Select onChange={e => setTask({...task,assigned_to:e.target.value})} placeHolder="fsfsd" color="secondary" className='w-100'>
                  {users && users.map((user,index) => (
                    <MenuItem tyle={{ color:'white' }} value={user.id} key={index}>{user.name}</MenuItem>
                  ))}
                </Select>
            </Form.Group>
            <Button className='w-100 mt-3' variant='contained' type="submit" color='secondary'>Create</Button>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
