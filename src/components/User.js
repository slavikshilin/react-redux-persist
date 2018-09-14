import React from 'react'
import PropTypes from 'prop-types'
import timestamp from 'unix-timestamp'

export class User extends React.Component {
  
  handleLogout = () => {
    const { handleLogout, clearPhotos } = this.props
    handleLogout()
    clearPhotos()
  }
  
  renderTemplate = () => {
    const { name, error, expire, isFetching } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

    if ((name) && (expire > timestamp.now())) {
      return <div><p>Привет, {name}!</p><p className="react-link" onClick={this.handleLogout}>Выйти</p></div>
    } else {
      return (
        <button className="btn" onClick={this.props.handleLogin}>
          Войти
        </button>
      )
    }
  }
  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  clearPhotos: PropTypes.func.isRequired
}
