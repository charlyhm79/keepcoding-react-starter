import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const StyledLine = styled.p`
  margin-bottom: 10px;
`;

export default () => (
  <StyledWrapper>
    <StyledLine>
      <strong>Nombre:</strong> Eric Weber
    </StyledLine>
    <StyledLine>
      <strong>Dirección:</strong> 402 Price Lake, Kimberlyshire, WI 38712-1501
    </StyledLine>
    <StyledLine>
      <strong>Teléfono:</strong> (912) 526-5410 x4550
    </StyledLine>
    <StyledLine>
      <strong>Email:</strong> Eric_Weber@gmail.com
    </StyledLine>
  </StyledWrapper>
);
