
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../../redux/Store";
import {connect} from "react-redux";
import {addPost, changePost} from "../../../../redux/ProfileReducer";
import {PostsType} from "../../../../redux/state";


let mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}
let mapDispatchToProps: MapDispatchToProps =  {
        addPost, changePost
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


type MapStateToProps = {
    posts: PostsType
    newPostText: string
}
type MapDispatchToProps = {
    addPost: () => void
    changePost: (post: string) => void
}