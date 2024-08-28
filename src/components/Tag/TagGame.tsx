import React from 'react';
import styles from './style.module.css';
import Game from '@/type/Game/Game';

interface TagGameProps {
  game: Game;
}

const TagGame: React.FC<TagGameProps> = ({ game }) => {
  const {
    id,
    name
  } : {
    id: number,
    name: string
  } = game;

  return (
    <p className={styles.tagGame}>{name}</p>
  );
};

export default TagGame;
