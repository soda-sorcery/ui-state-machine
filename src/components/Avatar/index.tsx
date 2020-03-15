import * as React from 'react';


interface AvatarProps {
    img: string;
}

const Avatar: React.FC<AvatarProps> = ({img}) => {
    return (
        <img src={img} />
    )
};


export {Avatar};