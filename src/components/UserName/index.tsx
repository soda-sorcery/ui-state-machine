import * as React from 'react';
import {TextField} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import './index.css'
import {RootState} from "../../rootReducer";
import {AvatarState, transitionActiveForm, transitionUpdateForm, transitionInActiveForm} from '../AvatarSelector/avatarSelectorSlice';
import styled from '@emotion/styled/macro';


const UserNameContainer = styled.div`
  margin-left: 20px;
`;

const StaticName = styled.div`
  margin-top: 37px; 
  cursor: pointer;
`;

const FormName = styled.div`
  margin-top: 18px;
`;


const Username: React.FC = () => {
    const { username, shouldEditUsername } = useSelector((state: RootState) => state.avatarSelector);
    const dispatch = useDispatch();
    const clickHandler = (event: any) => {
      dispatch(transitionActiveForm({shouldEditUsername: !shouldEditUsername} as AvatarState))
    };

    const blurHandler = (event: any) => {
      dispatch(transitionInActiveForm())
    };

    const updateName = (event: any) => {
      const {value} = event.target;
      dispatch(transitionUpdateForm({username: value} as AvatarState));
    };

    return (
      <UserNameContainer>
        {!shouldEditUsername &&
          <StaticName>
              <Typography variant={"h4"}>
                  <span id={'userName'} onClick={clickHandler}>{username}</span>
              </Typography>
          </StaticName>
        }
        {shouldEditUsername &&
          <FormName>
              <TextField autoFocus onChange={updateName} onBlur={blurHandler} value={username} label={'Name'} />
          </FormName>
        }
      </UserNameContainer>
    )
};


export { Username };