import React from 'react';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import { SvgXml } from 'react-native-svg';

import styles from './avatar.style';

const Avatar = ({params}) => {
    const avatar = createAvatar(avataaars, {
        ...params,
      });
      const svg = avatar.toString();

    return (
        <SvgXml xml={svg} style={styles.Avatar}/>
    );
};

export default Avatar;
