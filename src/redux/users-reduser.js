const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
let initialState = {
    users: [],
    pageSize: 100,
    totalUserCount: 49,
    currentPage: 10

    };
const userReducer = (state = initialState, action) =>{

    switch (action.type){
        case FOLLOW:
          return {
              ...state,
              users: state.users.map(u => {
                  if (u.id === action.userId) {
                      return {...u, followed: true};
                  }
                  return u;
              })
          }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USER_COUNT: {
            return {...state, totalUserCount: action.count}
        }

        default:
            return state;

    }

}
export const followAC = (userId) =>({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUserCount) => ({type: SET_TOTAL_USER_COUNT, count: totalUserCount})
export default userReducer;

