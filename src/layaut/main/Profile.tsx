import React from "react";
import { S } from "./StyledProfile";
import i from "../../assets/images/Снимок-9-24-23-в-20.23.webp"
import a from "../../assets/images/aleksandr-eremin-QfHmrIUN9G0-unsplash 1.png"
import { Button } from "../../components/Button";

export const Main: React.FC = () => {
    return (  
        <S.StyledMain>
            <img src={a} alt="" />
            <S.Box >
                <img src={i} alt="photo" />
                <div>

                </div>
            </S.Box>
            <div>
                <h2>My posts</h2>
                <S.Field as={"textarea"} />
                <Button>send</Button>                
            </div>
            <S.Posts>
                <img src={i} alt="photo" />
                <div>new post</div>             
            </S.Posts>

        </S.StyledMain>
    );
}
