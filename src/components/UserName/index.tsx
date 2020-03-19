import * as React from 'react';
import {TextField} from "@material-ui/core";
import {useState} from "react";
import { css, jsx } from '@emotion/core';
import { Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import './index.css'
import {RootState} from "../../rootReducer";
import { setUserName } from './userNameSlice';
/** @jsx jsx */



const Name: React.FC = () => {
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
      <div css={css`
        margin-left: 20px;
      `}>
        {!isClicked &&
          <Typography css={css`margin-top: 37px; cursor: pointer;`} variant={"h4"}>
              <span onClick={clickHandler}>{formName}</span>
          </Typography>
        }
        {isClicked &&
          <TextField autoFocus css={css`margin-top: 18px;`} onChange={updateName} onBlur={clickHandler} value={formName} label={'Name'} />
        }
      </div>
    )
};


export { Name };