import { storageService } from './async-storage.service'

const STORAGE_KEY = 'gig'

export const gigService = {
    query,
    getById,
    save,
    remove
}

function query(filterBy) {
    return storageService.query(STORAGE_KEY)
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

function remove(gigId) {
    return storageService.remove(STORAGE_KEY, gigId)
}

function save(gig) {
    if (gig._id) {
        return storageService.put(STORAGE_KEY, gig)
    } else {
        // gig.owner = userService.getLoggedinUser()

        //for dev
        if (!gig.seller) {
            gig.seller = { fullname: 'Michael Jordan' }
        }
        return storageService.post(STORAGE_KEY, gig)
    }
}





