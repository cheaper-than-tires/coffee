import styled from '@emotion/styled';
import { Column, Row } from '@/components/common/Flex';
import { ChangeEventHandler } from 'react';

export default function Record({ onChange }: {
  onChange: ChangeEventHandler<HTMLInputElement>
}) {
  return (
    <>
      <LoadFileContainer>
        <p>불러오기</p>
      </LoadFileContainer>
      <RecordContainer>
        <p>녹음하기</p>
      </RecordContainer>
    </>
  )
}


const LoadFileContainer = styled(Row)`
  width: 100%;
  height: 40%;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

const RecordContainer = styled(Row)`
  width: 100%;
  height: 60%;
  background-color: aqua;
  justify-content: center;
  align-items: center;
`;
