import * as React from 'react';
import { IconNames } from '../Icon';
import {getValuesFromEnum} from "../../utils";
import {Avatar} from "../Avatar";
import {css, jsx} from "@emotion/core";
import { Card } from '@material-ui/core'
/** @jsx jsx */

const avatars = getValuesFromEnum(IconNames);

export interface AvatarListProps {
  avatarSelectorHandler: (event: any) => void;
}

const avatarMap = avatars.map((m) => {
  return (
    <li id={m} css={css`margin-left: 10px;`} key={m}>
      <Avatar name={m as IconNames}/>
    </li>
  );
});

const AvatarList: React.FC<AvatarListProps> = ({avatarSelectorHandler}) => {
  return (
   <Card>
     <ul onClick={avatarSelectorHandler} css={css`display: flex; width: 75%; list-style: none; flex-wrap: wrap; margin-top: 37px;`}>
       {avatarMap}
     </ul>
   </Card>
  )
};


export { AvatarList };