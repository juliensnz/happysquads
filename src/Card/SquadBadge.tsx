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
      return <Octopus fill="white" width="70%" />;
    case 'bee':
      return <Bee fill="black" width="70%" />;
    case 'blackhawk':
      return <Blackhawk />;
    case 'chipmunk':
      return <Chipmunk />;
    case 'fox':
      return <Fox />;
    case 'panda':
      return <Panda />;
    case 'platypus':
      return <Platypus />;
    case 'quokka':
      return <Quokka />;
    case 'raccoon':
      return <Raccoon />;
    case 'rooster':
      return <Rooster />;
    case 'squirrel':
      return <Squirrel />;
    case 'suricate':
      return <Suricate />;
    case 'weasel':
      return <Weasel />;
  }
  return <Joker />;
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
`;
