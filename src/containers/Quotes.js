import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  mapQuote = () => {
    return this.props.state.quotes.map(quote => {
      return <QuoteCard
        quote={quote}
        removeQuote={this.props.removeQuote}
        upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote}
      />
    })
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.mapQuote()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: (id) => {
      dispatch(removeQuote(id))
    },
    upvoteQuote: (id) => {
      dispatch(upvoteQuote(id))
    },
    downvoteQuote: (id) => {
      dispatch(downvoteQuote(id))
    }
  };
};

//add arguments to connect as needed
export default connect(state => ({ state: state }), mapDispatchToProps)(Quotes);
