import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import font from '@/styles/font';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type Font = keyof typeof font;

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  color?: CSSProperties['color'];
  fontType: Font;
  width?: CSSProperties['width'];
  textAlign?: CSSProperties['textAlign'];
  ellipsis?: boolean;
}

const Text = ({ children, color, fontType, textAlign, width, ellipsis = false }: Props) => {
  return (
    <StyledText style={{ color, textAlign, width }} fontType={fontType} ellipsis={ellipsis}>
      {children}
    </StyledText>
  );
};

export default Text;

const StyledText = styled.p<{ fontType: Font; ellipsis: boolean }>`
  ${({ fontType }) => font[fontType]}
  ${(props) =>
          props.ellipsis &&
          css`
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          `}
`;
