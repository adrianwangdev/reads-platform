import React, { useRef } from 'react'
import { useWatch } from 'utilities/useWatch'
import { useRWD } from 'utilities/useRWD'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './stores'
import { actions as homeActions } from '../Home/stores'
import { Container, Grid } from '@material-ui/core'

/* Styles */
import {
  LoginPage,
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
  handleHasNotAccount,
  keepUserLogin,
  toggleDevice
}) => {

  const accountRef = useRef()
  const passwordRef = useRef()

  useWatch(keepUserLogin)
  useRWD(toggleDevice)

  return (
    userLogin && user
      ? <Redirect to='/' />
      : <LoginPage>
          <Container maxWidth="md">
            <Grid container justify="center">
              <GridWhiteBackground item xs={12} sm={8} md={6}>
                <Title>{ hasAccount ? '歡迎回到 Reads' : '註冊 Reads 帳號'}</Title>
                <div>
                  <Input type="text" placeholder="Email" ref={accountRef} />
                  <ErrorMessage showMessage={!!emailErrorMessage}>
                    {emailErrorMessage}
                  </ErrorMessage>
                </div>
                <div>
                  <Input type="password" placeholder="Password" ref={passwordRef} />
                  <ErrorMessage showMessage={!!passwordErrorMessage}>
                    {passwordErrorMessage}
                  </ErrorMessage>
                </div>
                {
                  hasAccount
                    ? <>
                        <ActionButton
                          onClick={() => handleUserLogin(accountRef.current, passwordRef.current)}
                        >登入</ActionButton>
                        <RemindText>
                          還沒有帳號嗎？
                          <LinkText onClick={handleHasNotAccount}>註冊帳號</LinkText>
                        </RemindText>
                      </>
                    : <>
                        <ActionButton
                          onClick={() => handleUserSignup(accountRef.current, passwordRef.current)}
                        >註冊</ActionButton>
                        <RemindText>
                          已經是會員了嗎？
                          <LinkText onClick={handleHasAccount}>登入會員</LinkText>
                        </RemindText>
                      </>
                }
              </GridWhiteBackground>
            </Grid>
          </Container>
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
  handleHasNotAccount: actions.handleHasNotAccount,
  keepUserLogin: homeActions.keepUserLogin,
  toggleDevice: homeActions.toggleDevice
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
