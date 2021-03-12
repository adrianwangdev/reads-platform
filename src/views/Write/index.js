import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Write = ({
  userLogin
}) => {

  return (
    userLogin
      ? <div>寫文章頁面</div>
      : <Redirect to='/login' />
  )
}

const mapStateToProps = state => ({
  userLogin: state.login.userLogin
})

export default connect(mapStateToProps, null)(Write)
