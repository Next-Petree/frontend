import Navbar from "../../../component/ManageReview/Navbar/Navbar";
import CustomLayout from "../../Layout/CustomLayout";
import OwnDogsForm from "../../../component/ManageOwnDogs/Form/OwnDogsForm";
import { BoxsContainer, Container, SubmitButton } from "../styles";

const EditOwnDogs = () => {
    return (
        <CustomLayout height={1653}>
            <Container>
                <BoxsContainer>
                    <Navbar />
                    <OwnDogsForm />
                </BoxsContainer>
                <SubmitButton>저장</SubmitButton>
            </Container>
        </CustomLayout>
    );
};

export default EditOwnDogs;
