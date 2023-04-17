import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input, InputInterface } from '.';
import { act } from '@testing-library/react-hooks';

const handleChange = jest.fn();

const defaultProps: InputInterface = {
  errorMessage: 'Must be a valid day',
  isValid: true,
  name: 'day',
  label: 'Day',
  placeholder: 'DD',
  type: 'text',
  value: '',
  handleChange,
};

const sut = (props = defaultProps) => {
  return render(<Input {...props} />);
};

describe('<Input />', () => {
  it('should render input default', () => {
    sut();
    expect(screen.getByTestId('input')).toBeTruthy();
  });
  it('should render input label', () => {
    sut();
    expect(screen.getByTestId('input-label')).toHaveTextContent(
      defaultProps.label
    );
  });

  it('should render errorMessage', () => {
    sut({ ...defaultProps, isValid: false });
    const errorMessage = screen.getByTestId('input-errorMessage');
    expect(errorMessage).toBeTruthy();
    expect(errorMessage).toHaveTextContent(defaultProps.errorMessage);
  });
  it.skip('should render input default', () => {
    sut();
    const inputText = screen.getByTestId('input-text');
    // userEvent.type(
    //   inputText,
    //   handleChange(() => useState('29'))
    // );

    act(() => {
      handleChange('5');
      // setValue = (inputText as any).value = 'Novo valor';
      userEvent.type(inputText, handleChange('Novo valor'));
    });

    // expect(handleChange).toHaveBeenCalledWith('29');
    screen.debug();
  });
});
