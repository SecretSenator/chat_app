import './App.css';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx';
import LoginForm from './components/LoginForm'


const App=()=>{
    if(!localStorage.getItem('username'))
        return <LoginForm/>
    return (
        <ChatEngine
            height='100vh'
            projectID={'baa4dad4-4585-4217-9587-6bc78128f573'}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
}

export default App;