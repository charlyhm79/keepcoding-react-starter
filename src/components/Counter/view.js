import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  border: 2px solid #0066cc;
  display: flex;
  justify-content: space-between;
`;

const StyledMessage = styled.p`
  font-size: 1.5rem;
  padding: 10px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  background: #0066cc;
  font-size: 1.4rem;
  color: #fff;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const CounterView = ({
  title, resetEnabled, handleReset, handleClick,
}) => (
  <StyledWrapper>
    <StyledMessage>{title}</StyledMessage>
    <StyledButtonGroup>
      <StyledButton disabled={!resetEnabled} onClick={handleReset}>
        Reset
      </StyledButton>
      <StyledButton onClick={handleClick}>Add!</StyledButton>
    </StyledButtonGroup>
  </StyledWrapper>
);

CounterView.defaultProps = {
  resetEnabled: false,
};

CounterView.propTypes = {
  title: PropTypes.string.isRequired,
  resetEnabled: PropTypes.bool,
  handleReset: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CounterView;
