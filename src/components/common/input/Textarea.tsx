import { styled } from 'styled-components';

const Container = styled.textarea`
  resize: none;
  width: 100%;
  height: 10rem;
  flex-shrink: 0;
  background-color: #f5f5f5;
  border: none;
  border-radius: 0.75rem;
  padding: 1.2rem;
  &::placeholder {
    color: #939393;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.03rem;
  }
`;

const TextCount = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03rem;
`;

export default function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Container maxLength={props.maxLength ?? 300} {...props} />
      <TextCount>
        {props.value?.toString().length}/{props.maxLength ?? 300}
      </TextCount>
    </div>
  );
}
