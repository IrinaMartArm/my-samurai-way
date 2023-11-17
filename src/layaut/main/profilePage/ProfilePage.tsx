import React from "react";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import {ActionType} from "../../../redux/state";
import {MyPostsContainer} from "./myposts/MyPostsContainer";
import {StoreAppType} from "../../../redux/Store";


type PropsType = {
    store: StoreAppType
    dispatch: (action: ActionType) => void
}
export const ProfilePage: React.FC<PropsType> = (props: PropsType) => {
  const {store, dispatch} = props

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store}
                        dispatch={dispatch}
      />
    </div>
  );
};

// const Box = styled.div`
//   img {
//     width: 100%;
//     height: 150px;
//   }
// `;
