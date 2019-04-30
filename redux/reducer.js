import { getAPIChampionAll } from '../api/getAPIChampionAll'
const defaultState = {
    APIChapms: getAPIChampionAll()
}
const filterChampsReducer = (state = defaultState, action) => {
    if (action.type === 'ALL') {
        return getAPIChampionAll()
            .then(res => res.apiArr)
    }
    if (action.type === 'FILTER') {
        return getAPIChampionAll()
            .then(res.apiArr.fillter(champ => champ.tags.map(tag => tag).indexOf(action.filter) >= 0))
    }
    return state
}
export default filterChampsReducer
//     switch(action,type){
//         case 'ALL':
//          return getAPIChampionAll()
//          .then(res=>res.apiArr)
//         case 'Tank':
//          return getAPIChampionAll()
//          .then(res.apiArr.fillter(champ=>champ.tags.map(tag=>tag).indexOf('Tank')>=0))
//         case 'Fighter':
//         return getAPIChampionAll()
//         .then(res.apiArr.fillter(champ=>champ.tags.map(tag=>tag).indexOf('Fighter')>=0))
//         case 'Assassin':
//         return getAPIChampionAll()
//          .then(res.apiArr.fillter(champ=>champ.tags.map(tag=>tag).indexOf('Assassin')>=0))
//         case 'Mage':
//         return getAPIChampionAll()
//          .then(res.apiArr.fillter(champ=>champ.tags.map(tag=>tag).indexOf('Mage')>=0))
//         case 'Marksman':
//         return getAPIChampionAll()
//          .then(res.apiArr.fillter(champ=>champ.tags.map(tag=>tag).indexOf('Marksman')>=0))
//         case 'Support':
//         getAPIChampionAll()
//          .then(res.apiArr.fillter(champ=>champ.tags.map(tag=>tag).indexOf('Support')>=0))
//         default :
//         return state
//     }
// All:
// Tank:
// Fighter:
// Assassin:
// Mage:
// Marksman:
// Support: