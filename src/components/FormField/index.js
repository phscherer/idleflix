import React from 'react';
import { darken } from 'polished';
import styled from 'styled-components';

function FormField({
  label,
  type,
  name,
  value,
  handleChange,
  padding,
  height,
  color,
  text
}) {
  return (
    <div>
      <label>
        { `${label}  ` }
        {
          type === 'textArea' &&
          <TextArea
            name={name}
            color={color}
            value={value}
            onChange={handleChange}
          />
        }
        {
          text &&
          <Input
            name={name}
            color={color}
            value={value}
            onChange={handleChange}
            padding={padding}
            height={height}
          />
        }
      </label>
    </div>
  );
}

const defaultColor = "#FFFFFF";

const TextArea = styled.textarea`
  background-color: transparent;
  color: ${props => props.color || defaultColor};
  resize: vertical;
  outline: none;
  border-radius: 3px;
  font-size: 16px;
  width: 100%;
  padding: 16px 16px;
  border: 1px solid ${props => props.color || defaultColor};
  &:focus {
    border: 1px solid ${props => darken(0.1, props.color || defaultColor)};
  }
`;

const Input = styled.input`
  background-color: transparent;
  color: ${props => props.color || defaultColor};
  padding: ${props => props.padding || '16px 16px'};
  outline: none;
  border-radius: 3px;
  font-size: 16px;
  width: 100%;
  border: 1px solid ${props => props.color || defaultColor};
  &:focus {
    border: 1px solid ${props => darken(0.1, props.color || defaultColor)};
  }
  height: ${props => props.height};
`;

export default FormField;