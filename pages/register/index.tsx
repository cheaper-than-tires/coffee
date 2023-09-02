import Head from 'next/head';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { Track } from '@/types/Track';
import styled from '@emotion/styled';
import { Column } from '@/components/common/Flex';

export default function Register() {
  const [data, setData] = useState<Track>({
    nickname: '',
    content: '',
    audio_file_url: '',
    location: {
      lat: 0,
      long: 0,
    },
    address: '',
    address_nickname: '',
    created_at: 0,
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const getCurrentPosBtn = () => {
    navigator.geolocation.getCurrentPosition(
      (pos: GeolocationPosition) => {
        setData({
          ...data,
          location: {
            lat: pos.coords.latitude,
            long: pos.coords.longitude
          },
          address: "부산 해운대구 우동"
        })
      },
      () => alert("위치 정보를 가져오는데 실패했습니다."),
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
  }

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    getCurrentPosBtn();
  }, [])
  return (
    <>
      <Head>
        <title>트랙 등록</title>
      </Head>
      <main>
        <Header>
          <button
            onClick={() => {}}
          >게시</button>
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
          value={data.address}
          placeholder={"장소를 입력해주세요"}
          disabled
        />
        <input
          type={'text'}
          onChange={onChange}
          name={"address_nickname"}
          value={data.address_nickname}
          placeholder={"장소를 입력해주세요"}
        />
        </Container>
      </main>
    </>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

const Container = styled(Column)`
  
`;
