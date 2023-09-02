import styled from '@emotion/styled';
import { Row } from '@/components/common/Flex';
import { ChangeEventHandler, useCallback, useState } from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';

export default function Record({ onChange }: {
  onChange: ChangeEventHandler<HTMLInputElement>
}) {
  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement('audio');
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <>
      <LoadFileContainer>
        <p>불러오기</p>
      </LoadFileContainer>
      <RecordContainer>
        <p>녹음하기</p>
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
            // autoGainControl,
            // channelCount,
            // deviceId,
            // groupId,
            // sampleRate,
            // sampleSize,
          }}
          onNotAllowedOrFound={(err) => console.table(err)}
          downloadOnSavePress={true}
          downloadFileExtension="webm"
          mediaRecorderOptions={{
            audioBitsPerSecond: 128000,
          }}
          // showVisualizer={true}
        />
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
