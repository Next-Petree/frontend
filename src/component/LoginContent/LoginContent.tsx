import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useNavigate } from "react-router-dom";
import { post } from "../../api/api";
import alertList from "../../utils/swal";
import Swal from "sweetalert2";
import { setProfileImg } from "../../features/breeder/breederSlice";

import {
  Container,
  ContentArea,
  PetTreeTitleArea,
  PetTreeIcon,
  Title,
  SubTitle1,
  SubTitle2,
  EmailInputArea,
  EmailText,
  EmailInput,
  PassWordInputArea,
  PassWordText,
  PassWordInput,
  FindIdOrPassWordArea,
  FindIdButton,
  FindPassWordButton,
  LoginOrSignUpButtonArea,
  BasicLoginButton,
  KakaoLoginButton,
  SignUpButtonArea,
  SignUpButton,
} from "./LoginContentStyle";

type LoginResponse = {
  status: string;
  data: {
    grantType: string;
    accessToken: string;
    accessTokenExpireTime: string;
    refreshToken: string;
    refreshTokenExpireTime: string;
    profileImgUrl: string | null;
  };
};

const LoginContent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API;

  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

  const handleLogin = async () => {
    try {
      const requestBody = {
        email: email,
        password: password,
      };

      const response = await post<LoginResponse>("/login", requestBody);

      console.log(response);

      if (response.data.status === "SUCCESS") {
        await Swal.fire(alertList.successMessage("로그인에 성공했습니다."));

        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);

        dispath(setProfileImg(response.data.data.profileImgUrl!));
        navigate("/");
      } else if (response.data.status === "FAIL") {
        await Swal.fire(alertList.errorMessage(`${response.data.data}`));
      }
    } catch (error: any) {
      console.error(
        "로그인 에러:",
        error.response ? error.response.data : error.message,
      );
      await Swal.fire(
        alertList.errorMessage("로그인 과정에서 오류가 발생했습니다."),
      );
    }
  };

  return (
    <Container>
      <PetTreeTitleArea>
        <PetTreeIcon />
        <Title>펫트리</Title>
      </PetTreeTitleArea>

      <SubTitle1>반려동물, 새로운 당신의 가족입니다</SubTitle1>
      <SubTitle2>또 하나의 가족 반려동물을 분양하세요</SubTitle2>

      <ContentArea>
        <EmailInputArea>
          <EmailText>이메일</EmailText>
          <EmailInput
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></EmailInput>
        </EmailInputArea>
        <PassWordInputArea>
          <PassWordText>비밀번호</PassWordText>
          <PassWordInput
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></PassWordInput>
        </PassWordInputArea>

        <FindIdOrPassWordArea>
          <FindIdButton to="/find-email">아이디</FindIdButton> /
          <FindPassWordButton to="/find-password">비밀번호</FindPassWordButton>
          찾기
        </FindIdOrPassWordArea>

        <LoginOrSignUpButtonArea>
          <BasicLoginButton onClick={handleLogin}>로그인</BasicLoginButton>
          <KakaoLoginButton
            onClick={() => (window.location.href = KAKAO_AUTH_URL)}
          >
            카카오 로그인
          </KakaoLoginButton>

          <SignUpButtonArea>
            아직 회원이 아니라면?
            <SignUpButton to="/register">회원가입</SignUpButton>
          </SignUpButtonArea>
        </LoginOrSignUpButtonArea>
      </ContentArea>
    </Container>
  );
};

export default LoginContent;
