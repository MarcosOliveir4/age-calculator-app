import { render, screen } from '@testing-library/react';
import { DisplayLabel, DisplayLabelInterface } from './index';

const defaultProps: DisplayLabelInterface = {
  label: 'years',
  value: 22,
};

const sut = (props = defaultProps) => {
  return render(<DisplayLabel {...props} />);
};

describe('<DisplayLabel />', () => {
  it('should render the component', () => {
    sut();
    const screenValue = screen.getByTestId('display-value');
    const screenLabel = screen.getByTestId('display-label');
    expect(screenLabel).toHaveTextContent(defaultProps.label);
    expect(screenValue).toHaveTextContent(`${defaultProps.value}`);
  });
  it('should render component with validation of no value', () => {
    sut({ label: 'days' });
    const screenValue = screen.getByTestId('display-value');
    expect(screenValue).toHaveTextContent('- -');
  });
  it('should render snapshot', () => {
    sut();
    expect(screen.getByTestId('display')).toMatchSnapshot();
  });
});
