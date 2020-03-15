import * as React from 'react';
import {Name} from "../Name";
import styled from '@emotion/styled/macro';
import {Container} from "@material-ui/core";
import {Icon} from "../Icon";



const FormContainer = styled.div`
  margin: 40px; 0;
  display: flex;
  align-items: center;
`;

const AvatarSelector: React.FC = () => {

  return (
    <>
     <Container>
       <FormContainer>
         <Icon name={'spiderMan'} />
         <Name name={'dan'} />
       </FormContainer>
     </Container>
    </>
  )
};

export { AvatarSelector }

