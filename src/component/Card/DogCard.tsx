import {
  Card,
  Container,
  ImageContainer,
  Image,
  Gradient,
  Status,
  DescContainer,
  Desc,
  DescText,
  Button,
} from "./Styles1";

import { IDCProps } from "../../types";

const DogCard = ({ src, name, species, DOB, status, onClick }: IDCProps) => {
  return (
    <Card>
      <Container>
        {status !== "AVAILABLE" ? (
          <ImageContainer>
            <Gradient></Gradient>
            <Image src={src} />
            <Status>{status === "Done" ? "분양완료" : "분양중"}</Status>
          </ImageContainer>
        ) : (
          <ImageContainer>
            <Image src={src} />
          </ImageContainer>
        )}
        <DescContainer>
          <Desc>
            <DescText>견종:</DescText>
            <DescText>{species}</DescText>
          </Desc>
          <Desc>
            <DescText>이름:</DescText>
            <DescText>{name}</DescText>
          </Desc>
          <Desc>
            <DescText>출생일:</DescText>
            <DescText>{DOB}</DescText>
          </Desc>
        </DescContainer>
      </Container>
      <Button onClick={onClick} disabled={status !== "AVAILABLE"}>
        상세보기
      </Button>
    </Card>
  );
};

export default DogCard;
