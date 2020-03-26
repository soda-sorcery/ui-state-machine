import * as React from 'react';
import { UserName } from "../UserName";
import styled from '@emotion/styled/macro';
import { AppBar, Container, Paper, Slide } from "@material-ui/core";
import { Avatar } from "../Avatar";
import { AvatarList } from "../AvatarList";
import './index.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../rootReducer";
import { AvatarState, transitionActiveForm, transitionUpdateForm, transitionInActiveForm } from './avatarSelectorSlice';
import { CircularProgress } from '@material-ui/core';
import { useEffect } from "react";

const FormContainer = styled.div`
  margin: 40px; 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 100px;
`;

const LoadingContainer = styled.div`
  margin-top: 25%;
`;


const AvatarSelector: React.FC = () => {
  const dispatch = useDispatch();
  const {selectedAvatar} = useSelector((state: RootState) => state.avatarSelector);
  const {shouldShowList} = useSelector((state: RootState) => state.avatarSelector);
  const {isLoading} = useSelector((state: RootState) => state.avatarSelector);


  const hideShowAvatarListHandler = (event: any) => {
    dispatch(transitionActiveForm({shouldShowList: !shouldShowList} as AvatarState))
  };

  const hideList = () => dispatch(transitionInActiveForm());

  const onBlurHandler = (event?: any) => {
    hideList();
  };

  const selectAvatarHandler = (event: any) => {
    const avatar = event.target.id;
    dispatch(transitionUpdateForm({selectedAvatar: avatar} as AvatarState));
    hideList();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(transitionInActiveForm());
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LoadingContainer><CircularProgress color={'secondary'} /></LoadingContainer>
  }
  return (
    <>
     <Container >
       <FormContainer>
         <AppBar classes={{root: 'avatar-container'}} color={'secondary'}>
           <Avatar onClick={hideShowAvatarListHandler} onBlur={onBlurHandler} name={selectedAvatar} />
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

