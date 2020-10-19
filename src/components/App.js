import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return <button>Sign Out</button>;
    } else {
      return <button>Sign In</button>;
    }
  }

  rednerHeader() {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <>
        {this.rednerHeader()}
        <Route path='/post' component={CommentBox} />
        <Route path='/' exact component={CommentList} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(App);
