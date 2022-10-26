import { gigService } from '../../services/gig.service'

export function loadGigs(filterBy) {
    return async (dispatch, getState) => {
        try {
            const gigs = await gigService.query(filterBy)
            dispatch({ type: 'SET_GIGS', gigs })
        } catch (err) {
            console.log(err);
        }
    }
}

export function onAddGig(gig) {
    return async dispatch => {
        try {
            await gigService.save(gig)
            dispatch({ type: 'ADD_GIG', gig })
        } catch (err) {
            console.log(err);
        }
    }
}

export function onEditGig(gig) {
    return async dispatch => {
        try {
            console.log('edit gig action:', gig);
            await gigService.save(gig)
            dispatch({ type: 'UPDATE_GIG', gig })
        } catch (err) {
            console.log(err);
        }
    }
}

export function getGigById(gigId) {
    return async dispatch => {
        try {

            const gig = await gigService.getById(gigId)
            dispatch({ type: 'SET_GIG', gig })
        } catch (err) {
            console.log(err);
        }
    }
}

export function removeGig(gigId) {
    return async dispatch => {
        try {
            await gigService.remove(gigId)
            dispatch({ type: 'REMOVE_GIG', gigId })
        } catch (err) {
            console.log(err);
        }
    }
}

// export function tryRobot(robotId) {
//   return async dispatch => {
//     const robot = await robotService.tryRobot(robotId)
//     dispatch({ type: 'UPDATE_ROBOT', robot })
//   }
// }


// export function setFilterBy(filterBy) {
//   return dispatch => {
//     dispatch({ type: 'SET_FILTER_BY', filterBy })
//   }
// }
