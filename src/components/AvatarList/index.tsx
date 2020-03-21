import * as React from 'react';
import { IconNames } from '../Icon';
import {getValuesFromEnum} from "../../utils";
import {Avatar} from "../Avatar";
import {css, jsx} from "@emotion/core";
import { Card } from '@material-ui/core'
import styled from '@emotion/styled/macro';

const avatars = getValuesFromEnum(IconNames);

export interface AvatarListProps {
  avatarSelectorHandler: (event: any) => void;
}

const UnorderedList = styled.ul`
  display: flex;
  width: 75%;
  list-style: none;
  flex-wrap: wrap;
  margin-top: 37px;
`;

const ListItemWithScale = styled.li`
  margin-left: 10px;
  &:hover{
    transform: scale(1.2);
  }
`;

const avatarMap = avatars.map((m) => {
  return (
    <ListItemWithScale id={m} key={m}>
      <Avatar name={m as IconNames}/>
    </ListItemWithScale>
  );
});

const AvatarList: React.FC<AvatarListProps> = ({avatarSelectorHandler}) => {
  return (
   <Card>
     <UnorderedList onClick={avatarSelectorHandler}>
       {avatarMap}
     </UnorderedList>
   </Card>
  )
};


export { AvatarList };