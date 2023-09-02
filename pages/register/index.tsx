import Head from 'next/head';
import { ChangeEventHandler, useEffect, useState } from 'react';
import { Track } from '@/types/Track';
import Content from '@/components/register/Content';
import Record from '@/components/register/Record';

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
        {data.audio_file_url.length > 0 ?
          <Content data={data} onChange={onChange} />
          :
          <Record
            onChange={onChange}
          />
        }
      </main>
    </>
  )
}
