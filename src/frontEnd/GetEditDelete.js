import React, {useEffect, useState,useRef} from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function Add() {
    const [posts, setPosts] = useState([])
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState("");
    const inputReset = useRef(null);
    const inputReset1 = useRef(null)
    const [isShown, setIsShown] = useState(false)
    const [count, setCount] = useState(0)
    const [isShow, invokeModal] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 15,
      };
    const submitValue = () => {
        const person = {
            firstName: value,
            lastName: value1,
        };
        axios.post('http://localhost:4000/crud', person)
    }

    const onDelete = (_id) => {
        axios.delete(`http://localhost:4000/crud/${_id}`)
    }

    const onUpdate = (_id) => {
        const person = {
            firstName: value,
            lastName: value1,
        };
        axios.put(`http://localhost:4000/crud/${_id}`, person)
        setIsShown(current => !current);
        setOpen(true)
    }

    useEffect(() => {
        axios.get('http://localhost:4000/crud')
        .then(res => {
        setPosts(res.data)
        })
    }, [onDelete]);

  return (
    <div>
        <div>
            <div>
                <form action="">
                    <input type="text" placeholder='firstName' ref={inputReset} onChange={(e) => setValue(e.target.value)} />
                    <input type="text" placeholder='lastName' ref={inputReset1} onChange={(e) => setValue1(e.target.value)} />
                    <button onClick={submitValue}>Create</button>
                </form>
            </div>
        </div>
        <div>
            {posts.map(post => { 
                 return( 
                    <div key={post._id}>
                        <h2>{post.firstName + " " + post.lastName}</h2>
                        <div>
                            <button onClick={() => onDelete(post._id)}>Delete</button>
                            <button onClick={() => onUpdate(post._id)}>Edit</button>
                        </div>
                        <Modal open={open} onClose={handleClose}>
                        <Box sx={style}>
                            <div className='modal'>
                                <form action="">
                                <label>FirstName</label>
                                <input type="text" onChange={(e) => setValue(e.target.value)}/>
                                <label>LastName</label>
                                <input type="text" onChange={(e) => setValue1(e.target.value)}/>
                                <button onClick={() => onUpdate(post._id)}>Update</button>
                                </form>
                            </div>
                        </Box>
                        </Modal>
                    </div> 
                    )
                })
            }
        </div>
    </div>
        )
};


// {isShown && (
    // <>
    {/* <div className='modal'> */}
        {/* <label>FirstName</label> */}
        {/* <input type="text" onChange={(e) => setValue(e.target.value)}/> */}
        {/* <label>LastName</label> */}
        {/* <input type="text" onChange={(e) => setValue1(e.target.value)}/> */}
        {/* <button onClick={() => onUpdate(post._id)}>Update</button> */}
    {/* </div> */}
    {/* </> */}
    // )}