import React, { useEffect, useState } from 'react'
import { Container, Paper, TextField, IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';
import "./chat.css"
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeasseges, sendMessage } from '../../redux/slice/ChatSlice';


export const Chat = () => {
 
const dispatch =useDispatch()
const message= useSelector((state)=> state.ChatSlice.messages )
const [inputText, setInputText]= useState("")
const [messages, setMessages]= useState([...message])


    const handleEnterAndSend=()=>{
      if(inputText){
         const userMassage= {inputText:inputText, sender:"user"}
        setMessages((prevMessages)=>[...prevMessages, userMassage])
        dispatch(sendMessage(userMassage))
        setInputText('')
      }
       
    }
   
       useEffect(()=>{
    dispatch(fetchMeasseges())
    setMessages(message)
    },[])
  return (
    <Container maxWidth="sm">
      <Paper elevation={3}>
        {/* Chat messages */}
        <div className="chat-messages">
          {messages?.map((item, index)=>{
            console.log(item)
            return(
              <div key={index} className={item?.sender?'message-container-for-sender':"message-container-for-reciver"}>
                <span  className={item?.sender?"text-left": "text-right" }>{item?.name || item?.inputText}</span>
                </div>
            )
          })}
        </div>
        <div className="text-field">
        <TextField
          placeholder="Type your message..."
          fullWidth
          name='inputText'
          value={inputText}
          margin="normal"
          variant="outlined"
          onChange={(e)=>setInputText(e.target.value)}
        />
        {/* Send button */}
        <IconButton color="primary" aria-label="Send" onClick={handleEnterAndSend}>
          <Send />
        </IconButton>
        </div>
      </Paper>
    </Container>
  );
};

