import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import "./styles/AuthForm.scss"
import React from 'react'
import { useNavigate } from 'react-router'

export default function AuthForm() {
  const navigate = useNavigate();
  return (
    <div className="outerBlock">
      <div className="innerBlock">
        <div className="notificationBlock">
          <h2 className="title">Sign in</h2>
          <span className="info">To use the application, you need to sign in</span>
        </div>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
          <GoogleLogin
              onSuccess={(res) => { sessionStorage.setItem('AccessToken', res.credential); navigate('/')}}
              onError={() => { sessionStorage.removeItem("AccessToken") }}
          />
        </GoogleOAuthProvider>
      </div>
    </div>
  )
}
