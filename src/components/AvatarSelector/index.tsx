import * as React from 'react';
import {Name} from "../Name";
import styled from '@emotion/styled/macro';
import {Container} from "@material-ui/core";
import {IconNames} from "../Icon";
import {Avatar} from "../Avatar";
import {getValuesFromEnum} from "../../utils";
import {AvatarList} from "../AvatarList";


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
         {/*<Avatar id={IconNames.WINTER_SOLDIER} />*/}
         {/*<Name name={'dan'} />*/}
         <AvatarList />
       </FormContainer>
     </Container>
    </>
  )
};

export { AvatarSelector }

