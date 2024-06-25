import React from 'react';
import styles from './style.module.css';
import Game from '@/type/Game/Game';
import Platform from '@/type/Platform/Platform';

interface TagPlatformProps {
  platform: Platform;
}

const TagPlatform: React.FC<TagPlatformProps> = ({ platform }) => {
  const {
    id,
    name
  } : {
    id: number,
    name: string
  } = platform;

  return (
    <p className={styles.tagPlatform}>{name}</p>
  );
};

export default TagPlatform;
