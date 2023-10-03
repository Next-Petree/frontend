import { WrapButton } from "@component/0min/WrapButton";
import { Typography } from "@mui/material";
import { Image, type PartialImageProps } from "@component/0min/Image";
import styled from "@emotion/styled";
import type { PropsWithChildren, CSSProperties } from "react";

interface SearchPageCardContainerProps extends PropsWithChildren {
  styles?: {
    padding?: CSSProperties["padding"];
  };
}

export const SearchPageCardContainer = ({
  children,
  styles,
}: SearchPageCardContainerProps) => {
  return (
    <WrapButton type="button">
      <S.Card styles={styles}>{children}</S.Card>
    </WrapButton>
  );
};

interface SearchPageCardImageProps extends PartialImageProps {
  dimmedText: string;
}

const SearchPageCardImage = ({
  src,
  alt,
  dimmedText,
}: SearchPageCardImageProps) => {
  if (dimmedText) {
    return (
      <S.DimmedContainer>
        <Image src={src} alt={alt} width={240} height={144} />;
        <S.Dimmed>
          <Typography color={"white"} fontSize={25} fontWeight={700}>
            {dimmedText}
          </Typography>
        </S.Dimmed>
      </S.DimmedContainer>
    );
  }
  return <Image src={src} alt={alt} width={240} height={144} />;
};

const SearchPageCardTitle = ({ children }: PropsWithChildren) => {
  return (
    <Typography component="h4" noWrap maxWidth="150px" align="left">
      {children}
    </Typography>
  );
};

const SearchPageCardSubTitle = ({ children }: PropsWithChildren) => {
  return (
    <Typography component="h5" noWrap maxWidth="80px" align="left">
      {children}
    </Typography>
  );
};

const SearchPageCardContent = ({ children }: PropsWithChildren) => {
  return (
    <Typography textAlign={"left"} maxWidth="100%" noWrap>
      {children}
    </Typography>
  );
};

export const SearchPageCard = Object.assign(SearchPageCardContainer, {
  Title: SearchPageCardTitle,
  SubTitle: SearchPageCardSubTitle,
  Content: SearchPageCardContent,
  Image: SearchPageCardImage,
});

type CardStyleProps = Pick<SearchPageCardContainerProps, "styles">;
const S = {
  Card: styled.div<CardStyleProps>`
    box-sizing: border-box;
    width: 280px;

    padding: ${({ styles }) =>
      styles?.padding ? styles.padding : "20px 20px 40px 20px"};

    border-radius: 16px;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.09);
  `,
  DimmedContainer: styled.div`
    position: relative;
    border-radius: 12px;
    overflow: hidden;
  `,
  Dimmed: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  `,
};
