import { styled } from "styled-components";
import ProfileForm from "./ProfileContent_Forms/ProfileForm";
import MajorDogForm from "./ProfileContent_Forms/MajorDogForm";



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
`



const ProfileContent = () => {
  return (
    <Wrapper>
      <ProfileForm/>
      <MajorDogForm/>
    </Wrapper>
  );
};

export default ProfileContent;