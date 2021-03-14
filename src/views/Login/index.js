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
  ErrorMessage,
  LinkText,
  ActionButton,
  RemindText
} from './login.stlyed'

const Login = ({
  user,
  userLogin,
  hasAccount,
  emailErrorMessage,
  passwordErrorMessage,
  handleUserLogin,
  handleUserSignup,
  handleHasAccount,
  handleHasNotAccount
}) => {

  const accountRef = useRef()
  const passwordRef = useRef()

  return (
    userLogin
      ? <Redirect to='/' />
      : user
        ? <Redirect to='/' />
        : <LoginPage>
            <LoginWrapper maxWidth="md">
              <Grid container justify="center">
                <GridWhiteBackground item xs={6}>
                  <Title>{ hasAccount ? '歡迎回到 Reads' : '註冊 Reads 帳號'}</Title>
                  <div>
                    <Input
                      type="text"
                      placeholder="Email"
                      ref={accountRef}
                    />
                    <ErrorMessage
                      showMessage={!!emailErrorMessage}
                    >{emailErrorMessage}</ErrorMessage>
                  </div>
                  <div>
                    <Input
                      type="password"
                      placeholder="Password"
                      ref={passwordRef}
                    />
                    <ErrorMessage
                      showMessage={!!passwordErrorMessage}
                    >{passwordErrorMessage}</ErrorMessage>
                  </div>
                  {
                    hasAccount
                      ? (<>
                          <ActionButton
                            onClick={() => handleUserLogin(accountRef.current, passwordRef.current)}
                          >登入</ActionButton>
                          <RemindText>
                            還沒有帳號嗎？
                            <LinkText onClick={handleHasNotAccount}>註冊帳號</LinkText>
                          </RemindText>
                        </>)
                      : (<>
                          <ActionButton
                            onClick={() => handleUserSignup(accountRef.current, passwordRef.current)}
                          >註冊</ActionButton>
                          <RemindText>
                            已經是會員了嗎？
                            <LinkText onClick={handleHasAccount}>登入會員</LinkText>
                          </RemindText>
                        </>)
                  }
                </GridWhiteBackground>
              </Grid>
            </LoginWrapper>
          </LoginPage>
  )
}

const mapStateToProps = state => ({
  user: state.login.user,
  userLogin: state.login.userLogin,
  hasAccount: state.login.hasAccount,
  emailErrorMessage: state.login.emailErrorMessage,
  passwordErrorMessage: state.login.passwordErrorMessage
})

const mapDispatchToProps = {
  handleUserLogin: actions.handleUserLogin,
  handleHasAccount: actions.handleHasAccount,
  handleUserSignup: actions.handleUserSignup,
  handleHasNotAccount: actions.handleHasNotAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
