import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 7px;
  padding-top: 15px;
  padding-bottom: 20px;
  width: 80%;
  height: 90%;
  border-radius: 12px;
  box-shadow: 0px 4px 20px 0px #00000017;
  &:hover{
    box-shadow: 0px 4px 20px 0px #00000053;
  }
`;
export const ImgBox = styled.div`
  position: relative;
`;
export const Img = styled.img`
  width: 12vw;
  height: 7.2vw;
  border-radius: 12px;
  background-color: aliceblue;
`;
export const Dermyimg = styled.div`
  width: 12vw;
  height: 7.2vw;
  border-radius: 12px;
  background-color: slategray;
`;
export const Badge = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;
export const Nameline = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
`;
export const Name = styled.span`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: left;
  color: #333333;

`;
export const Distance = styled.span`
  display: flex;
  margin-top: 2px;
  margin-left: 0.7vw;
  font-size: 2rem;
  color: #333333;
  font-weight: 600;
`;
export const MajorDog = styled.div`
  width: 180px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #333333;
`;

export const LitteBadge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Doginfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  gap: 2px;
`;

export const Span = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #333333;
`;

export const Poss = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row-reverse;
  gap: 2px;
`;