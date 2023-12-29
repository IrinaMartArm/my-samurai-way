
import {MyPosts} from "./MyPosts";
import {RootStateType} from "../../../../redux/Store";
import {connect} from "react-redux";
import {addPost,  PostType} from "../ProfileReducer";
import React, {ComponentType} from "react";
import {RouteComponentProps} from "react-router-dom";
import {compose} from "redux";


class MyPostsContainer extends React.Component<PropsType>{
    render() {
        return (
            <MyPosts addPost={this.props.addPost}
                    posts={this.props.posts}
            />
        )
    }
}
let mapStateToProps = (state: RootStateType): MapStateToProps => {
    return {
        posts: state.profileReducer.posts,
    }
}
let mapDispatchToProps: MapDispatchToProps =  {
        addPost
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPostsContainer)



type MapStateToProps = {
    posts: PostType[]
}
type MapDispatchToProps = {
    addPost: (post: string) => void
}
type MyPostsType = MapStateToProps & MapDispatchToProps

type PropsType = MyPostsType & RouteComponentProps