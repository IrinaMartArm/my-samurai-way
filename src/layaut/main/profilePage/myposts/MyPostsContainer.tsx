
import {ActionType, addPostAC, changePostAC} from "../../../../redux/state";
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../../redux/Store";
import {connect} from "react-redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: () => {dispatch(addPostAC())},
        updatePostText: (post: string) => {dispatch(changePostAC(post))}
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)





// export type PropsType = {
//     store: StoreAppType
//     dispatch: (action: ActionType) => void
// }

// export const MyPostsContainer: React.FC<PropsType> = (props: PropsType) => {
//
//     const state = props.store.getState()
//     const addPost = () => {
//         props.dispatch(addPostAC(state.profileReducer.newPostText))
//     }
//
//     const updatePostText = (post: string) => {
//         props.dispatch(changePostAC(post))
//     }
//
//     return (
//         <MyPosts posts={state.profileReducer.posts}
//                  addPost={addPost}
//                  newPostText={state.profileReducer.newPostText}
//                  updatePostText={updatePostText}/>
//     );
// }
