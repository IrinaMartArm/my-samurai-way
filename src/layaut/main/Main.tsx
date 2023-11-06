import a from "../../assets/images/IMG_3719 1 2.png";
import React from "react";
import styled from "styled-components";

export const Main = () => {
    return (
        <div>
            <Box>
                <img src={a} alt="" />
            </Box>
        </div>
    )
}

const Box = styled.div`
  img {
    width: 100%;
    height: 150px;
  }
`;