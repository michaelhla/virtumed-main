
import React from 'react';
import './Button.css';
import {logout} from '../../server/auth'


const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];


export const LogoutButton = ({
  children,
  type,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return <button 
    className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
    onClick={logout}
    type = {type}>{children}</button>;
};


export default LogoutButton;