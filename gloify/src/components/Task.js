import React , { useState } from 'react'
import moment from 'moment'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip'
import { updateTaskAction } from '../redux/updateTask'
import { deleteTaskAction } from '../redux/deleteTask'
import { resetDelete } from '../redux/deleteTask';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogContent, DialogTitle, FormControlLabel, MenuItem, Radio, RadioGroup, Select, Button } from '@mui/material';
import { Form } from 'react-bootstrap';

export const Task = ({ message, due_date, assigned_to, priority, assigned_name, created_on, id }) => {
  
  const dispatch = useDispatch()

  const [openCreate, setOpenCreate] = useState(false)

  const colors = {
    1:"#EE6352",
    2:"#FFD166",
    3:"#649A47"
  }

  const [task, setTask] = useState({
    message:"",
    due_date:"",
    priority:"",
    assigned_to:"",
    taskid:""
  })

  const deleteHandler = () => {
    const formData = new FormData()
    formData.append('taskid',id.toString())
    dispatch(deleteTaskAction({formdata:formData}))
    setTimeout(() => {
      dispatch(resetDelete())
    },1500)
  }

  const setUpdateForm = () => {
    setTask({
      message,
      assigned_to,
      priority,
      due_date:due_date.split(' ')[0],
      due_time:due_date.split(' ')[1]
    })
    setOpenCreate(true)
  }

  const userGetUsers = useSelector(state => state.userGetUsers)
  const { users } = userGetUsers

  const updateHandler = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('taskid',id.toString())
    formData.append('message',task.message)
    formData.append('due_date',task.due_date+" "+task.due_time)
    formData.append('priority',task.priority)
    formData.append('assigned_to',task.assigned_to)
    dispatch(updateTaskAction({formdata:formData}))
  }

  return (
    <div className='task d-flex my-1 rounded'>
      <div style={{ borderRight:'1px solid rgb(61,61,61)', width:'max-content', textAlign:'center' }} className='p-3'>
        <div>
          <strong style={{ fontSize:'13px' }}>Task ID</strong>
          <div style={{ fontSize:'30px' }}>{id}</div>
        </div>
      </div>
      <div className='m-2' style={{ flex:1 }}>
        <div>
          <strong>Message : </strong>
         {message}
        </div>
        <div className="d-flex" style={{ alignItems:'center', textAlign: 'right' }}>
          <strong>Priority : </strong>
          <div className='ml-2 mt-1' style={{ backgroundColor: `${colors[parseInt(priority)]}`, height:'12px', width:'12px', borderRadius:'50%' }}></div>
        </div>
        <div>
          <strong>Due Date : </strong>{moment(due_date).format('MMMM Do YYYY, h:mm:ss a')} 
        </div>
      </div>
      <div className="m-2" style={{ textAlign: 'right' }}>
        <div>
          <strong>Created On : </strong>{moment(created_on).format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        {assigned_to && assigned_name ? <div>
            <strong>Assigned to : </strong>{assigned_name} (ID : {assigned_to})
          </div> 
          : <div>
              <strong>Assigned to : </strong>N/A
            </div>
            }
      </div>
      <div style={{ borderLeft:'1px solid rgb(61,61,61)', width:'max-content', textAlign:'center', height:'auto', flexDirection:'column' }} className='d-flex p-3 ml-auto'>
        <Tooltip title="Delete" placement="right">
          <DeleteIcon onClick={deleteHandler} style={{ fontSize:'18px', cursor: 'pointer' }} />
        </Tooltip>
        <Tooltip title="Edit" placement="right">
          <EditIcon onClick={setUpdateForm} style={{ fontSize:'18px', cursor: 'pointer' }} className='mt-4'/>
        </Tooltip>
      </div>
      <Dialog fullWidth={true} open={openCreate} onClose={e => setOpenCreate(false)}>
        <DialogTitle>
          Update Task
        </DialogTitle>
        <DialogContent>
          <Form onSubmit={updateHandler}>
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
              <RadioGroup value={task.priority} onChange={e => setTask({...task,priority:e.target.value})} row>
                <FormControlLabel value="1" control={<Radio color="secondary" />} label="High" />
                <FormControlLabel value="2" control={<Radio color="secondary" />} label="Medium" />
                <FormControlLabel value="3" control={<Radio color="secondary" />} label="Low" />
              </RadioGroup>
            </Form.Group>
            <Form.Group className='mt-2 d-flex' style={{ alignItems:'center' }}>
              <Form.Label className='w-50'>Assigned To</Form.Label>
                <Select value={task.assigned_to} onChange={e => setTask({...task,assigned_to:e.target.value})} placeHolder="fsfsd" color="secondary" className='w-100'>
                  {users && users.map((user,index) => (
                    <MenuItem tyle={{ color:'white' }} value={user.id} key={index}>{user.name}</MenuItem>
                  ))}
                </Select>
            </Form.Group>
            <Button className='w-100 mt-3' variant='contained' type="submit" color='secondary'>Update</Button>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
