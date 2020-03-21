import * as React from 'react';
import {UserName} from "../UserName";
import styled from '@emotion/styled/macro';
import {AppBar, Container, Paper, Slide} from "@material-ui/core";
import {Avatar} from "../Avatar";
import { AvatarList } from "../AvatarList";
import {useState} from "react";
import './index.css'
import { useDispatch, useSelector } from "react-redux";
import {RootState} from "../../rootReducer";
import {AvatarState, transitionActiveForm, transitionUpdateForm} from './avatarSelectorSlice';

const FormContainer = styled.div`
  margin: 40px; 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100px;
`;


const AvatarSelector: React.FC = () => {
  const dispatch = useDispatch();
  const {selectedAvatar} = useSelector((state: RootState) => state.avatarSelector);
  const {shouldShowList} = useSelector((state: RootState) => state.avatarSelector);


  const handler = (event: any) => {
    dispatch(transitionActiveForm({shouldShowList: !shouldShowList} as AvatarState))
  };

  const hideList = () => dispatch(transitionActiveForm({shouldShowList: false} as AvatarState));

  const onBlurHandler = (event?: any) => {
    hideList();
  };

  const selectAvatarHandler = (event: any) => {
    const avatar = event.target.id;
    dispatch(transitionUpdateForm({selectedAvatar: avatar} as AvatarState));
    hideList();
  };

  return (
    <>
     <Container >
       <FormContainer>
         <AppBar classes={{root: 'avatar-container'}} color={'secondary'}>
           <Avatar onClick={handler} onBlur={onBlurHandler} name={selectedAvatar} />
           <UserName />
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

