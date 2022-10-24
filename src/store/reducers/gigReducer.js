const INITIAL_STATE = {
  gigs: [],
  currGig: null,
  filterBy: null
}
export function gigReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_GIGS':
      return {
        ...state,
        gigs: action.gigs
      }
    case 'SET_GIG':
      return {
        ...state,
        currGig: action.gig
      }
    case 'REMOVE_GIG':
      return {
        ...state,
        gigs: state.gigs.filter(gig => gig._id !== action.gigId)
      }
    case 'ADD_GIG':
      return {
        ...state,
        gigs: [...state.gigs, action.gig]
      }
    case 'UPDATE_GIG':
      return {
        ...state,
        gigs: state.gigs.map(gig => (gig._id === action.gig._id) ? action.gig : gig)
      }
    // case 'SET_FILTER_BY':
    //   return {
    //     ...state,
    //     filterBy: action.filterBy
    //   }
    // case 'UPDATE_ROBOT':
    //   const currRobot = state.currRobot._id === action.robot._id ? action.robot : state.currRobot
    //   return {
    //     ...state,
    //     robots: state.robots && state.robots.map(robot => robot._id === action.robot._id ? action.robot : robot),
    //     currRobot
    //   }
    default:
      return state
  }
}