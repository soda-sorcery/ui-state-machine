import * as React from 'react';
import {Icon, IconNames} from "../Icon";
import {css, jsx} from "@emotion/core";
/** @jsx jsx */

interface AvatarProps {
    name: IconNames
    onClick?: (event: any) => void;
    onBlur?: (event: any) => void;
}

const Avatar: React.FC<AvatarProps> = ({name, onClick, onBlur}) => {

    return (
     <article onBlur={onBlur} onClick={onClick} id={name} css={css`cursor: pointer; background-color: #fff; border-radius: 50%;`}>
         <Icon name={name} />
     </article>
    )
};


export {Avatar};