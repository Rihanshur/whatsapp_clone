import React from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

function Chat() {
  return (
    <div className='chat'>
        <div className='chat__header'>
          <Avatar />
          <div className='chat__headerInfo'>
            <h3>Room name</h3>
            <p>Last seen at...</p>
          </div>
          <div className='chat__headerRight'>
            <IconButton>
                <SearchIcon />
            </IconButton>
        
            <IconButton>
                <DonutLargeIcon />  
            </IconButton>

            <IconButton>
                <MoreVertIcon />
            </IconButton>
          </div>
        </div> 

        <div className='chat__body'>
          
          <p className='chat__message'>
            <span className='chat__name'>Sonny</span>
            This is a message 
            <span className = "chat__timeStamp">{new Date().toUTCString()}</span>
          </p>

          <p className='chat__message chat__reciever'>
            <span className='chat__name'>Sonny</span>
            This is a message 
            <span className = "chat__timeStamp">{new Date().toUTCString()}</span>
          </p>

        </div> 

        <div className='chat__footer'>
          <MoreVertIcon />
          <form>
            <input placeholder='Type a message' type='text' />
            <button type='submit'>Send a mesasge</button>
          </form>
          <MoreVertIcon />

        </div>   
    </div>
  )
}

export default Chat
