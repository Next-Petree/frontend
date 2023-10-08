import React, { FC } from "react";
import * as S from "../../MyPageStyle";
import LeftMenuBar from "@component/MyPage/LeftMenuBar/LeftMenuBar";
import UserProfileEdit from "@component/MyPage/UserProfileEdit/UserProfileEdit";
import PasswordUpdate from "@component/MyPage/PasswordUpdate/PasswordUpdate";

const AdopterProfileEdit: FC = () => {
  return (
    <S.ContentContainer>
      <LeftMenuBar />
      <S.MainContent>
        <UserProfileEdit />
        <PasswordUpdate />
      </S.MainContent>
    </S.ContentContainer>
  );
};

export default AdopterProfileEdit;
