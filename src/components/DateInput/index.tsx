import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: Date;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const {
    registerField,
    defaultValue = Date.now.toString(),
    fieldName,
    error,
  } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  // const inputValueRef = useRef<InputValueReference>({ value: 'defaultValue' });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<Date>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      // setValue(_ref: unknown, value) {
      //   inputValueRef.current.value = value;
      //   inputElementRef.current.setNativeProps({ text: value });
      // },
      // clearValue() {
      //   inputValueRef.current.value = '';
      //   inputElementRef.current.clear();
      // },
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused}>
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#999"
        defaultValue={defaultValue}
        value={inputValueRef.current.value}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
      {isFocused && (
        <DateTimePicker
          value={inputValueRef.current.value}
          onChange={value => {
            inputValueRef.current.value = value.target.value;
          }}
        />
      )}
    </Container>
  );
};

export default forwardRef(Input);
