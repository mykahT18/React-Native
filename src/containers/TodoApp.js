import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../core-modules/actions'

import App from '../app'

const mapStateToProps = (state) => {
	// console.log("maps props-------> ", state.todos)
  return {
    todos: state.todos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators
  , dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)