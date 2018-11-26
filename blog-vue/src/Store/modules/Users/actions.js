import Data from '../../../data'
export default{
getAllUsers(context){
    context.commit('setAllUsers',Data)
}
}