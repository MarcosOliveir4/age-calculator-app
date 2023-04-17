import styled, { css } from 'styled-components';

interface SpanProps {
  color: string;
}

export const Display = styled.div`
  width: 100%;

  display: flex;
  gap: 8px;
`;

const defaultSpan = css`
  font-style: italic;
  font-weight: 800;
  font-size: 104px;
  line-height: 110%;
  letter-spacing: -0.02em;
`;

export const Span = styled.span<SpanProps>`
  color: var(${(props) => props.color});
  ${defaultSpan};
`;
