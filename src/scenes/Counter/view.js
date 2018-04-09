import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { theme } from '../../constants';
import { Button, ButtonGroup, ContentWrapper } from '../../components';

const StyledWrapper = styled(ContentWrapper)`
  border: 2px solid ${theme.colors.primary};
  display: flex;
  justify-content: space-between;
`;

const StyledMessage = styled.p`
  font-size: 1.5rem;
  padding: 10px;
`;

const CounterView = ({
  title, resetEnabled, handleReset, handleClick,
}) => (
  <StyledWrapper>
    <StyledMessage>{title}</StyledMessage>
    <ButtonGroup>
      <Button danger disabled={!resetEnabled} onClick={handleReset}>
        Reset
      </Button>
      <Button primary onClick={handleClick}>
        Add!
      </Button>
    </ButtonGroup>
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
