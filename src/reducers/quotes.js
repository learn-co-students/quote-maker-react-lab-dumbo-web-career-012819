import uuid from 'uuid'

export default (state = [], action) => {
  let idx;
  switch (action.type){

  case "ADD_QUOTE":
  	return [...state, action.quote]

  case "REMOVE_QUOTE":
  	idx = state.indexOf(action.quote);
    return [...state.slice(0, idx), ...state.slice(idx + 1)];

  case "UPVOTE_QUOTE":
  	idx = state.indexOf(action.quote);
  	let quote = state[idx]

  	return [...state.slice(0, idx),
  			{...quote, votes: quote.votes += 1},
  			...state.slice(idx + 1)]

  case "DOWNVOTE_QUOTE":
  	idx = state.indexOf(action.quote);
  	quote = state[idx]

  	if(quote.votes > 0) {
	  	return [...state.slice(0, idx),
	  			{...quote, votes: quote.votes -= 1},
	  			...state.slice(idx + 1)]
  	}
  
  default:
    return state;
  }
}
