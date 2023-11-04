import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectBreederProfile } from "../../features/breeder/breederSlice";

import {
  Container,
  TitleArea,
  TitleLogo,
  TitleText,
  HeaderContent,
  NavigationMenu,
  NavigationLink,
  UserProfileImage,
} from "./HeaderStyle";

import NavDropdown from "../Dropdown/NavDropdown";
import DecodeToken from "../../utils/DecodeJWT/DecodeJWT";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isCilcked, setIsCilcked] = useState<boolean>(false);

  const profileImg = useAppSelector(selectBreederProfile);
  console.log(profileImg);

  const handleClick = () => {
    setIsCilcked(prev => !prev);
  };

  const decodedData = DecodeToken();

  useEffect(() => {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken")
    ) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Container>
      <TitleArea to="/">
        <TitleLogo />
        <TitleText />
      </TitleArea>
      <HeaderContent>
        {decodedData?.role === "BREEDER" ? (
          <NavigationMenu>
            <NavigationLink to="/certify">브리더 인증받기</NavigationLink>
            <NavigationLink to="/dogys/1">강아지 모아보기</NavigationLink>
            <NavigationLink to="/breeders/1">브리더모아보기</NavigationLink>
          </NavigationMenu>
        ) : (
          <NavigationMenu>
            <NavigationLink to="/test-description">인증 테스트</NavigationLink>
            <NavigationLink to="/dogys/1">강아지 모아보기</NavigationLink>
            <NavigationLink to="/breeders/1">브리더모아보기</NavigationLink>
          </NavigationMenu>
        )}

        <div onClick={handleClick}>
          <UserProfileImage imgSrc={profileImg} />
        </div>
      </HeaderContent>

      {isCilcked && (
        <NavDropdown profileUrl={profileImg} loggedIn={isLoggedIn} />
      )}
    </Container>
  );
};

export default Header;
