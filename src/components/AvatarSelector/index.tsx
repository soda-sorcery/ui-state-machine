import * as React from 'react';
import {Name} from "../Name";
import styled from '@emotion/styled/macro';
import {AppBar, Card, Collapse, Container, Fade, Grow, Paper, Slide, Zoom} from "@material-ui/core";
import {IconNames} from "../Icon";
import {Avatar} from "../Avatar";
import {getValuesFromEnum} from "../../utils";
import { AvatarList } from "../AvatarList";
import {useState} from "react";
import {css, jsx} from "@emotion/core";
import './index.css'

const FormContainer = styled.div`
  margin: 40px; 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100px;
`;


const AvatarSelector: React.FC = () => {
  const [shouldShowList, setShouldShowList] = useState(false);

  const handler = (event: any) => {
    setShouldShowList(!shouldShowList);
  };

  return (
    <>
     <Container>
       <FormContainer>
         <AppBar classes={{root: 'avatar-container'}} color={'secondary'}>
           <Avatar onClick={handler} name={IconNames.WINTER_SOLDIER} />
           <Name name={'dan'} />
         </AppBar>
         <Slide direction={'down'} in={shouldShowList}>
           <Paper elevation={0} classes={{root: 'avatar-selection-list'}}>
             <AvatarList />
           </Paper>
         </Slide>
       </FormContainer>
     </Container>
    </>
  )
};

export { AvatarSelector }

