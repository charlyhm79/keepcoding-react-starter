// Aquí si importamos React, porque usamos JSX
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styledMap from 'styled-map';
import { Link } from 'react-router-dom';

const StyledButton = styled.button`
  background: ${styledMap({
    primary: '#0066cc',
    danger: '#ff0000',
    default: '#7b7b7b',
  })};
  color: #fff;
  opacity: ${styledMap({
    disabled: 0.4,
    default: 1,
  })};
  cursor: ${styledMap({
    disabled: 'not-allowed',
    default: 'pointer',
  })};
  fontsize: ${props => props.fontSize || '1.6rem'};
`;

const StyledLinkButton = StyledButton.withComponent(Link);

// Esto ES JSX
const Button = (props) => {
  // Si contiene la propiedad "to" es un enlace
  // y debemos usar el componente "StyledLinkButton"
  const ButtonComponent = props.to ? StyledLinkButton : StyledButton;
  // Pasamos todas las propiedades del componente original
  // al componente elegido
  return <ButtonComponent {...props} />;
};

Button.defaultProps = {
  to: undefined,
};

Button.propTypes = {
  to: PropTypes.string,
};

export default Button;
