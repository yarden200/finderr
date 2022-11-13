import { storageService } from './async-storage.service'

const STORAGE_KEY = 'gig'

export const gigService = {
    query,
    getById,
    save,
    remove
}

async function query(filterBy) {
    let gigsToShow = await storageService.query(STORAGE_KEY)
    // console.log('service filterBy:', filterBy);
    if (filterBy) {
        var { query, minPrice, maxPrice } = filterBy
        minPrice = minPrice || 0
        maxPrice = maxPrice || Infinity
        if (query) {
            gigsToShow = gigsToShow.filter(gig => gig.title.toLowerCase().includes(query.toLowerCase()))
        }
        gigsToShow = gigsToShow.filter(gig => gig.price <= maxPrice && gig.price >= minPrice)
    }
    return gigsToShow
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





