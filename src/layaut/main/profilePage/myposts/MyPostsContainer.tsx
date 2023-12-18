
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../../redux/Store";
import {connect} from "react-redux";
import {addPost, changePost, PostType} from "../../../../redux/ProfileReducer";



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
    posts: PostType[]
    newPostText: string
}
type MapDispatchToProps = {
    addPost: () => void
    changePost: (post: string) => void
}
