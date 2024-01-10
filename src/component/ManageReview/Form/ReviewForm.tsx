import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

import { IMG6 } from "../../../assets/images";

const Wrapper = styled.div`
  background-color: white;
  /* width: 1060px; */
  width: 49vw;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const ReturnBtnContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
`;

const ReturnButton = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #aeaeae;
  font-size: 32px;

  border: 2px solid #aeaeae;
  border-radius: 8px;

  cursor: pointer;
`;

const ReturnBtnText = styled.div`
  font-family: Noto Sans KR;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.03em;
  text-align: center;
  color: #939393;
`;

const Title = styled.div`
  width: 100%;
  font-family: Noto Sans KR;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-top: 20px;
`;

const Form = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const TopInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 82px;
`;

const InputContainer = styled.div`
  width: 429px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputTitle = styled.h1`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.03em;
  text-align: left;
  color: #000000;
  padding: 0;
  margin: 0;
`;

const Input = styled.input`
  width: 92%;
  height: 48px;
  padding: 0 15px;

  background: #f5f5f5;
  border-radius: 12px;
  border: none;

  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #939393;
`;

const ReviewInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

export const Textarea = styled.textarea`
  background: #f5f5f5;
  border-radius: 16px;
  height: 189px;
  padding: 20px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: -0.03em;
  text-align: left;
  color: #939393;
  border: none;
  isolation: isolate;
  resize: none;
  z-index: 1;
`;

export const TextLength = styled.span`
  position: absolute;
  width: 50px;
  height: 23px;
  right: 22px;
  bottom: 19px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.03em;

  color: #000000;
  z-index: 2;
`;

const ImageUploaderContainer = styled.div`
  // 240 * 3 + 36 * 2
  width: 792px;
  // 지워야함
  /* height: 212px; */

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ImageUploaderTitle = styled.div`
  font-family: Noto Sans KR;
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;

const ImageUploaderFlexBox = styled.div`
  width: 100%;
  display: flex;
  gap: 36px;
`;

const ImageUpoaderbox = styled.div`
  width: 240px;
  height: 212px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageBox = styled.div<{ img?: string }>`
  width: 240px;
  height: 144px;
  border-radius: 12px;
  background: #f5f5f5;
  background-image: url(${(props) => props.img});
`;

const ImageUploaderButton = styled.button`
  width: 240px;
  height: 52px;
  border: none;
  border-radius: 16px;
  background: #4ec1bf;

  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;

  cursor: pointer;
`;

const ReviewForm = () => {
  return (
    <Wrapper>
      <ReturnBtnContainer>
        <ReturnButton>
          <IoIosArrowBack />
        </ReturnButton>
        <ReturnBtnText>이전 페이지로</ReturnBtnText>
      </ReturnBtnContainer>
      <InnerContainer>
        <Title>분양후기 관리</Title>
        <Form>
          <TopInputContainer>
            <InputContainer>
              <InputTitle>제목</InputTitle>
              <Input placeholder="제목을 작성하세요" />
            </InputContainer>
            <InputContainer>
              <InputTitle>견종</InputTitle>
              <Input placeholder="포메라니안" />
            </InputContainer>
            <InputContainer>
              <InputTitle>성별</InputTitle>
              <Input placeholder="수컷" />
            </InputContainer>
            <InputContainer>
              <InputTitle>강아지 이름</InputTitle>
              <Input placeholder="루카스" />
            </InputContainer>
          </TopInputContainer>
          <ReviewInputContainer>
            <InputTitle>분양 후기 작성</InputTitle>
            <Textarea placeholder="분양후기를 작성해주세요." />
            <TextLength>0/2000</TextLength>
          </ReviewInputContainer>
        </Form>
        <ImageUploaderContainer>
          <ImageUploaderTitle>이미지 업로드(0/4)</ImageUploaderTitle>
          <ImageUploaderFlexBox>
            <ImageUpoaderbox>
              <ImageBox />
              <ImageUploaderButton>업로드</ImageUploaderButton>
            </ImageUpoaderbox>
          </ImageUploaderFlexBox>
        </ImageUploaderContainer>
      </InnerContainer>
    </Wrapper>
  );
};

export default ReviewForm;
