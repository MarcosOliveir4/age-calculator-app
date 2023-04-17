import React from 'react';
import * as S from './styles';

export interface DisplayLabelInterface {
  label: string;
  value?: number;
}
export const DisplayLabel: React.FC<DisplayLabelInterface> = ({
  label,
  value,
}: DisplayLabelInterface) => {
  return (
    <S.Display data-testid="display">
      <S.Span color="--purple" data-testid="display-value">
        {value || '- -'}
      </S.Span>
      <S.Span color="--black" data-testid="display-label">
        {label}
      </S.Span>
    </S.Display>
  );
};
