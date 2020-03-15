import * as React from 'react';
import { IconNames } from '../Icon';
import {getValuesFromEnum} from "../../utils";
import {Avatar} from "../Avatar";
import {css, jsx} from "@emotion/core";
/** @jsx jsx */

const avatars = getValuesFromEnum(IconNames);

const handler = function (event: any){
  console.log('event', event.target.id);
};

const AvatarList: React.FC = () => {
  return (
    <ul onClick={handler} css={css`display: flex; width: 75%; list-style: none; flex-wrap: wrap`}>
      {avatars.map((m) => {
        return (
          <li id={m} css={css`margin-left: 10px;`} key={m}>
            <Avatar name={m as IconNames} />
          </li>
        )
      })}
    </ul>
  )
};

export { AvatarList };