import * as React from 'react';
import {Name} from "../Name";
import styled from '@emotion/styled/macro';
import {AppBar, Container, Paper, Slide} from "@material-ui/core";
import {IconNames} from "../Icon";
import {Avatar} from "../Avatar";
import { AvatarList } from "../AvatarList";
import {useState} from "react";
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
  const [selectedAvatar, setSelectedAvatar] = useState(IconNames.SPIDER_MAN);

  const handler = (event: any) => {
    console.log('*** event ***', event);
    setShouldShowList(!shouldShowList);
  };

  const onBlurHandler = (event: any) => {
    setShouldShowList(false);
  };

  const selectAvatarHandler = (event: any) => {
    const avatar = event.target.id;
    setSelectedAvatar(avatar);
  };

  return (
    <>
     <Container onClick={handler}>
       <FormContainer>
         <AppBar classes={{root: 'avatar-container'}} color={'secondary'}>
           <Avatar onBlur={onBlurHandler} name={selectedAvatar} />
           <Name name={'dan'} />
         </AppBar>
         <Slide direction={'down'} in={shouldShowList}>
           <Paper elevation={0} classes={{root: 'avatar-selection-list'}}>
             <AvatarList avatarSelectorHandler={selectAvatarHandler}/>
           </Paper>
         </Slide>
       </FormContainer>
     </Container>
    </>
  )
};

export { AvatarSelector }

