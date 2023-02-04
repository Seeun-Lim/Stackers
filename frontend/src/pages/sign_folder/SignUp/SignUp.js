/* eslint-disable */
import React, { useState } from 'react'
import LogoImage from './LogoImage.png'
import LogoText from './LogoText.png'
import './SignUp.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'

function SignUp() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  return (
    <div>
      <div className="SignUp">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p>
            <img src={LogoImage} alt="LogoImage" />
          </p>
          <div style={{ display: 'flex', margin: '0px' }}>
            <img src={LogoText} alt="LogoText" />
            <h3
              style={{
                margin: '0px',
                fontSize: '30px'
              }}
            >
              에 오신 것을 환영합니다.
            </h3>
          </div>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            setId(event.target.id.value)
            setPassword(event.target.password.value)
            setEmail(event.target.email.value)
            console.log(id, password, email)
          }}
        >
          <TextField
            placeholder="아이디"
            size="medium"
            style={{
              width: '100%',
              marginBottom: '25px'
            }}
            name="id"
          />
          <TextField
            placeholder="비밀번호(알파벳, 특수문자를 포함한 8~10자로 구성)"
            size="medium"
            style={{ width: '100%', marginBottom: '25px' }}
            name="password"
          />
          <TextField
            placeholder="이메일"
            size="medium"
            style={{ width: '100%', marginBottom: '25px' }}
            name="email"
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '25px'
            }}
          >
            <TextField
              placeholder="인증번호 입력"
              size="medium"
              style={{ width: '85%' }}
            />
            <Button
              variant="contained"
              className="LogIn-button"
              style={{
                height: '55px',
                backgroundColor: 'rgba(217, 217, 217, 1)',
                color: 'black'
              }}
            >
              전송
            </Button>
          </div>
          <hr style={{ margin: '0px 0px 25px 0px' }} />
          <Button
            variant="contained"
            className="LogIn-button"
            style={{
              width: '100%',
              height: '55px',
              backgroundColor: 'rgba(217, 217, 217, 1)',
              color: 'black',
              marginBottom: '30px'
            }}
            type="submit"
          >
            가입하기
          </Button>
        </form>
        <button
          onClick={() => {
            axios({
              method: 'post',
              url: '/api/join',
              data: {
                username: id,
                password: password,
                email: email
              }
            }).then((response) => {
              console.log(response)
            })
          }}
        >
          테스트용
        </button>
      </div>
    </div>
  )
}

export default SignUp