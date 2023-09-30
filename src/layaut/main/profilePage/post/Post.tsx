import styled from "styled-components";
import i from "../../../../assets/images/Снимок-9-24-23-в-20.23.webp";

export const Post = () => {
    return (  
        <Posts>
            <img src={i} alt="photo" />
            <div>new post</div>
        </Posts>
    );
}

const Posts = styled.div`
    padding: 20px;
    display: flex;
    gap: 30px;
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
`