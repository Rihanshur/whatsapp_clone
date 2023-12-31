import React from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

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
                <AttachFileIcon />  
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
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
          <form>
            <input placeholder='Type a message' type='text' />
            <button type='submit'>Send a mesasge</button>
          </form>
          <IconButton>
          <MicIcon />
          </IconButton>

        </div>   
    </div>
  )
}

export default Chat
