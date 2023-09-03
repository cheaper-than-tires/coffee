import Head from 'next/head';
import { ChangeEventHandler, useEffect, useState } from 'react';
import Content from '@/components/register/Content';
import Record from '@/components/register/Record';
import { api } from '@/interfaces/api';

export default function Register() {
  const [data, setData] = useState<ReqFeed>({
    nickname: '',
    content: '',
    location: {
      lat: 0,
      long: 0,
    },
    address_nickname: '',
    bg_pattern: '',
    profile_image: 'any string'
  });

  const [file, setFile] = useState<Blob>();

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

  const post = async (): Promise<void> => {
    console.log('asdfasdf')
    await api.saveFeed(data, file!);
  }

  // useEffect(() => {
  //   console.log(data)
  //   console.log(file)
  // }, [data, file])

  useEffect(() => {
    getCurrentPosBtn();
  }, [])
  return (
    <>
      <Head>
        <title>트랙 등록</title>
      </Head>
      <main>
        {file ?
          <Content
            data={data}
            onChange={onChange}
            post={post}
          />
          :
          <Record
            setFile={setFile}
          />
        }
      </main>
    </>
  )
}
