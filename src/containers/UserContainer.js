import React from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { handleLogin, handleLogout } from '../actions/UserActions'
import { getPhotos, clearPhotos } from '../actions/PageActions'
import { getCurrentYear } from '../util/date'

class UserContainer extends React.Component {
  handleLogin = () => {
    const { handleLogin, getPhotos } = this.props
    const successCallback = () => {
      const year = getCurrentYear()
      getPhotos(year)
    }

    handleLogin(successCallback)
  }

  render() {
    const { user, handleLogout, clearPhotos } = this.props
    
    return (
      <User
        name={user.name}
        error={user.error}
        expire={user.expire}
        isFetching={user.isFetching}
        handleLogin={this.handleLogin}
        handleLogout={handleLogout}
        clearPhotos={clearPhotos}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: successCallback => dispatch(handleLogin(successCallback)),
    handleLogout: () => dispatch(handleLogout()),
    clearPhotos: () => dispatch(clearPhotos()),
    getPhotos: year => dispatch(getPhotos(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer)
