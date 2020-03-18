import * as React from 'react';
import {TextField} from "@material-ui/core";
import {useState} from "react";
import { css, jsx } from '@emotion/core';
import { Typography } from "@material-ui/core";
import './index.css'
/** @jsx jsx */

interface NameProps {
    name: string;
}

const Name: React.FC<NameProps> = ({name}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [formName, setFormName] = useState(name);

    const clickHandler = (event: any) => {
      setIsClicked(!isClicked);
    };

    const updateName = (event: any) => {
      const {value} = event.target;
      setFormName(value);
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