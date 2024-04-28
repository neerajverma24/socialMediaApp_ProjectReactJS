import './Register.css'

export default function Register() {
    return (
        <div className='register'>
            <div className='register-wrapper'>
                <div className='register-left'>
                    <h3 className='register-logo'>Neerajsocial</h3>
                    <span className='register-desc'>
                        Connect with friends and the world around you on Neerajsocial.
                    </span>
                </div>
                <div className='register-right'>
                    <div className='register-box'>
                        <input className='register-input' placeholder='Username' />
                        <input className='register-input' placeholder='Email' />
                        <input className='register-input' placeholder='Password' />
                        <input className='register-input' placeholder='Password Again' />
                        <input className='register-input' placeholder='Mobile Number' />
                        <input className='register-input' placeholder='Confirm Mobile Number' />
                        <button className='register-button'>Register</button>
                        <button className='register-register'>Log In to your Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
