import { useForm } from "react-hook-form";
import {
  Button,
  Container,
  Errmsg,
  Form1,
  Info,
  Infos,
  Input,
  InsideForm,
  Label,
  SearchButton,
  Store,
  Title,
} from "./styles";
import Swal from "sweetalert2";
import alertList from "../../../../utils/swal";

const ModifyAuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const onValid = async (data:any) => {
    const answer = await Swal.fire({
      ...alertList.doubleCheckMessage("회원정보를 저장하시겠습니까?"),
      width: "350px",
    });
    if (answer.isConfirmed) {
      console.log(data);
    }
  };
  return (
    <Container>
      <Title>회원정보 수정</Title>
      <Form1 onSubmit={handleSubmit(onValid)}>
        <Infos>
          <Info>
            <Label>회원유형</Label>
            <Input $islen="mid" value="브리더" disabled />
          </Info>
          <Info>
            <Label>
              닉네임<span>2~10자 이내</span>
            </Label>
            <InsideForm>
              <Input
                type="text"
                $islen="shot"
                placeholder="닉네임을 넣어주세요"
                {...register("nickname", {
                  minLength: {
                    value: 2,
                    message: "2~10자 이내로 입력해주세요",
                  },
                  maxLength: {
                    value: 10,
                    message: "2~10자 이내로 입력해주세요",
                  },
                  required: "닉네임을 입력해주세요",
                })}
              />
              <SearchButton>중복확인</SearchButton>
            </InsideForm>
            {errors.nickname ? (
              <Errmsg $needMargin={false}>{`${errors.nickname.message}`}</Errmsg>
            ) : null}
          </Info>
          <Info>
            <Label>이메일</Label>
            <Input
              type="email"
              $islen="mid"
              {...register("email", { required: "이메일을 입력해주세요" })}
            />
            {errors.email ? <Errmsg $needMargin={false}>{`${errors.email.message}`}</Errmsg> : null}
          </Info>
          <Info>
            <Label>활동지역</Label>
            <InsideForm>
              <Input
                type="text"
                $islen="shot"
                {...register("address1", {
                  required: "활동지역을 입력해주세요",
                })}
              />
              <SearchButton>주소검색</SearchButton>
            </InsideForm>
            <Input
              type="text"
              $islen="long"
              {...register("address2", { required: "상세주소를 입력해주세요" })}
            />
            {errors.address1 ? (
              <Errmsg $needMargin={false}>{`${errors.address1.message}`}</Errmsg>
            ) : null}
            {errors.address2 ? (
              <Errmsg $needMargin={false}>{`${errors.address2.message}`}</Errmsg>
            ) : null}
          </Info>
          <Info>
            <Label>휴대전화</Label>
            <Input
              type="text"
              $islen="mid"
              {...register("phoneNumber", {
                required: "휴대전화 번호를 입력해주세요",
                pattern: {
                  value: /^01([016789])-?([0-9]{3,4})-?([0-9]{4})$/,
                  message: "휴대전화 번호의 형식이 아닙니다.",
                },
              })}
            />
            {errors.phoneNumber ? (
              <Errmsg $needMargin={false}>{`${errors.phoneNumber.message}`}</Errmsg>
            ) : null}
          </Info>
        </Infos>
        <Store>
          <Button $isLong={true}>저장</Button>
        </Store>
      </Form1>
    </Container>
  );
};

export default ModifyAuthForm;
