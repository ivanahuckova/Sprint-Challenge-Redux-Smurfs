import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
export class App extends Component {
  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.props.getSmurfs();
          }}>
          Show me some smurfs!
        </button>
        <div>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.name}>
                <div>
                  Name:<span>{smurf.name}</span>
                </div>
                <div>
                  Age:<span>{smurf.age}</span>
                </div>
                <div>
                  Height:<span>{smurf.height}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSmurfs, addSmurf }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
