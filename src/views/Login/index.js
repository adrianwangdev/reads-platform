import React, { useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './stores'
import { Grid } from '@material-ui/core'

/* Styles */
import {
  LoginPage,
  LoginWrapper,
  GridWhiteBackground,
  Title,
  Input,
  Link,
  LoginButton,
  RemindText
} from './login.stlyed'

const Login = ({
  userLogin,
  login
}) => {

  const accountRef = useRef()
  const passwordRef = useRef()

  return (
    userLogin
      ? <Redirect to='/' />
      : <LoginPage>
        <LoginWrapper maxWidth="md">
          <Grid container justify="center">
            <GridWhiteBackground item xs={6}>
              <Title>登入</Title>
              <Input
                type="text"
                placeholder="Email"
                ref={accountRef}
              />
              <Input
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
              <Link href="/">忘記密碼</Link>
              <LoginButton
                onClick={() => login(accountRef.current, passwordRef.current)}
              >登入</LoginButton>
              <RemindText>
                還沒有帳號嗎？<Link href="/">註冊帳號</Link>
              </RemindText>
            </GridWhiteBackground>
          </Grid>
        </LoginWrapper>
      </LoginPage>
  )
}

const mapStateToProps = state => ({
  userLogin: state.login.userLogin
})

const mapDispatchToProps = {
  login: actions.login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
