import uuid from 'uuid'
export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      const id = uuid()
      const quote = {
        id: id,
        votes: 0,
        ...action.quote
      }
      return [...state, quote]
    case 'REMOVE_QUOTE':
      console.log(action)
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      const upIndex = state.findIndex(quote => quote.id === action.quoteId);
      const upQuote = state[upIndex];

      return [
        ...state.slice(0, upIndex),
        {...upQuote,  votes: upQuote.votes += 1 },
        ...state.slice(upIndex + 1)
      ];
    case 'DOWNVOTE_QUOTE':
      const downIndex = state.findIndex(quote => quote.id === action.quoteId);
      const downQuote = state[downIndex];

      if(downQuote.votes > 0) {
        return [
          ...state.slice(0, downIndex),
          {...downQuote, votes: downQuote.votes -= 1 },
          ...state.slice(downIndex + 1)
        ];
      } else {
        return state
      }
    default:
      return state
  }

}
