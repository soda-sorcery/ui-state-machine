import * as React from 'react';
import {Icon, IconNames} from "../Icon";
import {css, jsx} from "@emotion/core";
/** @jsx jsx */

interface AvatarProps {
    name: IconNames
}

const Avatar: React.FC<AvatarProps> = ({name}) => {
    return (
     <article id={name} css={css`cursor: pointer;`}>
         <Icon name={name} />
     </article>
    )
};


export {Avatar};