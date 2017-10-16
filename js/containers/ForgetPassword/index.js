/**
 * # ForgotPassword.js
 *
 */
'use strict'
/**
 * ## Imports
 *
 * Redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * The actions we need
 */
import * as authActions from '../../actions_reducers/auth/authActions'

/**
 *   LoginRender
 */
import LoginRender from '../../components/LoginRender'

/**
 * Need React
 */
import React, { Component } from 'react'

const {
  REGISTER,
  LOGIN,
  FORGOT_PASSWORD
} = require('../../lib/constants').default

/**
  * ## Redux boilerplate
  */

function mapStateToProps (state) {
  return {
    auth: state.auth,
    global: state.global
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

function buttonPressHandler (resetPassword, email) {
  resetPassword(email)
}
/**
 * ### Translations
 */
var I18n = require('react-native-i18n')
import Translations from '../../lib/Translations'
I18n.translations = Translations

class ForgotPassword extends Component {
  static navigationOptions = {
    title: I18n.t('ForgotPassword.reset_password')
  }

  render () {
    let loginButtonText = I18n.t('ForgotPassword.reset_password')
    let onButtonPress = buttonPressHandler.bind(null,
      this.props.actions.resetPassword,
      this.props.auth.form.fields.email)

    return (
      <LoginRender
        formType={FORGOT_PASSWORD}
        loginButtonText={loginButtonText}
        onButtonPress={onButtonPress}
        displayPasswordCheckbox={false}
        leftMessageType={REGISTER}
        rightMessageType={LOGIN}
        auth={this.props.auth}
        global={this.props.global}
        navigation={this.props.navigation}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)