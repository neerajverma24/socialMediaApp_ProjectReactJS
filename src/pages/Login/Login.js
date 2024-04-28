import './Login.css'

export default function Login() {
    return (
        <div className='login'>
            <div className='login-wrapper'>
                <div className='login-left'>
                    <h3 className='login-logo'>Neerajsocial</h3>
                    <span className='login-desc'>
                        Connect with friends and the world around you on Neerajsocial.
                    </span>
                </div>
                <div className='login-right'>
                    <div className='login-box'>
                        <input className='login-input' placeholder='Email' />
                        <input className='login-input' placeholder='Password' />
                        <button className='login-button'>Log In</button>
                        <span className='login-forgot'>Forgot Password ?</span>
                        <button className='login-register'>Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
