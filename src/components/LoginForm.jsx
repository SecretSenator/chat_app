import {useState} from 'react';
import axios from 'axios'

const projectID='baa4dad4-4585-4217-9587-6bc78128f573';

const LoginForm=()=>{
const [username,setUsername]=useState('');
const [password, setPassword]=useState('');
const [error, setError] = useState('')

const handleSubmit=async(e)=>{
    e.preventDefault();
    const authObject={'project-ID':projectID,
                        'User-Name':username,
                        'User-Secret':  password      
             }
    try{
       await axios.get('https://api.chatengine.io/chats',
        {headers: authObject})
        localStorage.setItem('username',username)
        localStorage.setItem('password',password)
        window.location.reload();
        setError('');
    } catch(error){
        setError('OOPS!! Incorrect Credentials!')
    }
}

return (
    <div className='wrapper'>
        <div className='form'>
            <h1 className='title'>Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    className='input'
                    placeholder='username'
                    required
                />
                 <input type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className='input'
                    placeholder='password'
                    required
                />
                <div align='center'>
                    <button type='submit' className='button' onClick={handleSubmit}>
                        <span>Start Chatting</span>
                    </button>
                </div>
            </form>
            <h1>{error}</h1>
        </div>
    </div>
);
}

export default LoginForm;