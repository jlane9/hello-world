import { IonIcon } from '@ionic/react';
import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  border?: string;
  backgroundColor?: string;
  textColor?: string;
  placeholder?: string;
  startIcon?: string;
  startIconOnClick?: MouseEventHandler<HTMLIonIconElement>;
  endIcon?: string;
  endIconOnClick?: MouseEventHandler<HTMLIonIconElement>;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    border,
    backgroundColor,
    textColor,
    placeholder,
    startIcon,
    startIconOnClick,
    endIcon,
    endIconOnClick,
    ...inputProps
  } = props;

  return (
    <InputWrapper
      backgroundColor={backgroundColor}
      textColor={textColor}
      border={border}
      className={`flex rounded-full ${className ? className : ''}`}
    >
      {startIcon && (
        <div className="flex items-center ml-4">
          <div className="h-5 m-1">
            <button className="border-none h-5">
              <IonIcon className="w-5 h-5" icon={startIcon} onClick={startIconOnClick} />
            </button>
          </div>
        </div>
      )}
      <StyledInput
        backgroundColor={backgroundColor}
        textColor={textColor}
        placeholder={placeholder}
        className="flex flex-grow px-2 rounded-full border-none focus:outline-none"
        padding={startIcon ? 4 : 16}
        {...inputProps}
      />
      {endIcon && (
        <div className="flex items-center mr-4">
          <div className="h-5 m-1">
            <button className="border-none h-5">
              <IonIcon className="w-5 h-5" icon={endIcon} onClick={endIconOnClick} />
            </button>
          </div>
        </div>
      )}
    </InputWrapper>
  );
};

interface InputWrapperProps {
  backgroundColor?: string;
  border?: string;
  textColor?: string;
}

const InputWrapper = styled.div<InputWrapperProps>`
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'inherit')};
  border: ${(props) => (props.border ? props.border : 'none')};
  height: 3rem;

  ion-icon {
    color: ${(props) => (props.textColor ? props.textColor : '#55555')};
  }
`;

interface StyledInputProps {
  textColor?: string;
  backgroundColor?: string;
  padding?: number;
}

const StyledInput = styled.input<StyledInputProps>`
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'inherit')};
  color: ${(props) => (props.textColor ? props.textColor : '#55555')};
  caret-color: ${(props) => (props.textColor ? props.textColor : '#55555')};
  line-height: 1.5rem;
  font-size: 1.25rem;
  margin-left: ${(props) => (!!props.padding ? props.padding : 0)}px;
  margin-right: ${(props) => (!!props.padding ? props.padding : 0)}px;

  ::placeholder {
    color: ${(props) => (props.textColor ? props.textColor : '#55555')};
    opacity: 1;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => (props.textColor ? props.textColor : '#55555')};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => (props.textColor ? props.textColor : '#55555')};
  }
`;

export default Input;
