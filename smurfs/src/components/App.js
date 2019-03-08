import React from 'react';
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
export class App extends React.Component {
  nameRef = React.createRef();
  ageRef = React.createRef();
  heightRef = React.createRef();

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <button
          onClick={() => {
            this.props.getSmurfs();
          }}>
          Show me some smurfs!
        </button>
        <form>
          <h4>Add some smurfs</h4>
          <div>
            Name:
            <input type="text" ref={this.nameRef} />
          </div>
          <div>
            Age:
            <input type="number" ref={this.ageRef} />
          </div>
          <div>
            Height:
            <input type="text" ref={this.heightRef} />
          </div>
          <button
            type="submit"
            onClick={event => {
              event.preventDefault();
              console.log(this.nameRef.current.value);
              this.props.addSmurf(this.nameRef.current.value, this.ageRef.current.value, this.heightRef.current.value);
            }}>
            Submit
          </button>
        </form>
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
