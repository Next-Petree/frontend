import React from 'react';

import {
  TestWrap,
  TestTitle,
  TestNumber,
  Question,
  ExampleWrap,
  Example,
} from './TestCompStyle';

type TestProps = {
  TestNum: string;
  Question: string;
  Example: string[];
};

function TestComp(props: TestProps) {
  const exam = [...props.Example];
  return (
    <TestWrap>
      <TestNumber>
        <span>{props.TestNum}</span>/<span>10</span>
      </TestNumber>
      <Question>{props.Question}</Question>
      <ExampleWrap>
        {exam.map((v, i) => (
          <Example key={i}>{v}</Example>
        ))}
      </ExampleWrap>
    </TestWrap>
  );
}

export default TestComp;
