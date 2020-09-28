import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import FlipMove from 'react-flip-move';
import './Message.css'
import Message from './Messege'
import { db } from './Firebase'
import firebase from 'firebase'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function Main() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { username: 'DAVID', message: 'Hey Bro' },
    ])
    const [username, setUsername] = useState('')
    console.log(input);
    console.log(messages);

    useEffect(() => {
        setUsername(prompt('pleae input your name'))
    }, [])

    useEffect(() => {
        db.collection('messages').orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
            })
    }, [])

    const sendMessege = (event) => {
        event.preventDefault()
        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });


        setInput('');
    }


    return (
        <div>
           
            <h1 >Welcome {username}</h1>
            <form className="app_form">
               
            <FormControl  className='formControll'  >
             
                <Input className='form_input' placeholder='Enter a messege.... ' aria-describedby="my-helper-text" type='text' value={input} onChange={event => setInput(event.target.value)} /> <br></br>

                <IconButton className='form_button'  disabled={!input} variant="contained" type='submit' onClick={sendMessege}>
                    <SendIcon/>
                </IconButton>
                    
            </FormControl>
            
            </form>
            <FlipMove>
                {
                    messages.map(({id, message }) => (
                        <Message key={id} username={username} message={message} />
                    ))
                }
            </FlipMove>
        </div>

    );
}

export default Main
