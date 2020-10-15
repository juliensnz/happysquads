import React, {FC} from 'react';
import styled from 'styled-components';
import {SquadType} from './Card';
import {
  Bee,
  Blackhawk,
  Chipmunk,
  Fox,
  Joker,
  Octopus,
  Panda,
  Platypus,
  Quokka,
  Raccoon,
  Rooster,
  Squirrel,
  Suricate,
  Weasel,
} from './SquadIcon';

const getIcon = (squad: SquadType) => {
  switch (squad) {
    case 'octopus':
      return <Octopus width="75%" fill="white" />;
    case 'bees':
      return <Bee width="75%" fill="white" />;
    case 'blackhawks':
      return <Blackhawk width="75%" fill="white" />;
    case 'chipmunks':
      return <Chipmunk width="75%" fill="white" />;
    case 'foxes':
      return <Fox width="75%" fill="white" />;
    case 'pandas':
      return <Panda width="75%" fill="white" />;
    case 'platypus':
      return <Platypus width="75%" fill="white" />;
    case 'quokka':
      return <Quokka width="75%" fill="white" />;
    case 'raccoons':
      return <Raccoon width="75%" fill="white" />;
    case 'roosters':
      return <Rooster width="75%" fill="white" />;
    case 'squirrels':
      return <Squirrel width="75%" fill="white" />;
    case 'suricates':
      return <Suricate width="75%" fill="white" />;
    case 'weasels':
      return <Weasel width="75%" fill="white" />;
  }
  return <Joker width="75%" fill="white" />;
};

export const SquadBadge: FC<{squad: SquadType}> = ({squad}) => {
  const icon = getIcon(squad);

  return <Container squad={squad}>{icon}</Container>;
};

const Container = styled.div<{squad: SquadType}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15mm;
  height: 15mm;
  position: absolute;
  transform: translate(35mm, 25mm);
  border-radius: 10mm;
  background-color: ${(props) => props.theme.squad[props.squad]};
  border: 1mm solid white;
`;
