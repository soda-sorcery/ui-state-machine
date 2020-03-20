import * as React from 'react';
import {TextField} from "@material-ui/core";
import {useState} from "react";
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import './index.css'
import {RootState} from "../../rootReducer";
import { setUserName } from './userNameSlice';
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


const UserName: React.FC = () => {
    const [isClicked, setIsClicked] = useState(false);
    const formName = useSelector((state: RootState) => state.userName.name);
    const dispatch = useDispatch();
    const clickHandler = (event: any) => {
      setIsClicked(!isClicked);
    };

    const updateName = (event: any) => {
      const {value} = event.target;
      dispatch(setUserName({name: value}));
    };

    return (
      <UserNameContainer>
        {!isClicked &&
          <StaticName>
              <Typography variant={"h4"}>
                  <span id={'userName'} onClick={clickHandler}>{formName}</span>
              </Typography>
          </StaticName>
        }
        {isClicked &&
          <FormName>
              <TextField autoFocus onChange={updateName} onBlur={clickHandler} value={formName} label={'Name'} />
          </FormName>

        }
      </UserNameContainer>
    )
};


export { UserName };