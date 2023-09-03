import styled from '@emotion/styled';
import { Column } from '@/components/common/Flex';
import { ChangeEventHandler } from 'react';

export default function Content({ data, onChange, post }: {
  data: ReqFeed,
  onChange: ChangeEventHandler<HTMLInputElement>,
  post: () => void
}) {
  return (
    <>
      <Header>
        <button
          onClick={post}
        >게시
        </button>
      </Header>
      <Container>
        <input
          type={'text'}
          onChange={onChange}
          name={"content"}
          value={data.content}
          placeholder={"소개를 해주세요!"}
        />
        <input
          type={'text'}
          onChange={onChange}
          name={"address_nickname"}
          value={data.address_nickname}
          placeholder={"장소를 입력해주세요"}
        />
      </Container>
    </>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled(Column)`

`;
