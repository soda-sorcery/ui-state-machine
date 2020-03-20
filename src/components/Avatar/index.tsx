import * as React from 'react';
import {Icon, IconNames} from "../Icon";
import styled from '@emotion/styled/macro';

interface AvatarProps {
    name: IconNames
    onClick?: (event: any) => void;
    onBlur?: (event: any) => void;
}

const AvatarIconContainer = styled.article`
  cursor: pointer;
  background-color: #fff;
  border-radius: 50%;
`;

const Avatar: React.FC<AvatarProps> = ({name, onClick, onBlur}) => {

    return (
     <AvatarIconContainer onBlur={onBlur} onClick={onClick} id={name}>
         <Icon name={name} />
     </AvatarIconContainer>
    )
};


export {Avatar};