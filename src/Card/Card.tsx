import React, {FC} from 'react';
import styled from 'styled-components';
import {Bee} from '../SquadIcon/Bee';
import {Octopus} from '../SquadIcon/Octopus';

export type SquadType =
  | 'bee'
  | 'blackhawk'
  | 'chipmunk'
  | 'fox'
  | 'joker'
  | 'octopus'
  | 'panda'
  | 'platypus'
  | 'quokka'
  | 'raccoon'
  | 'rooster'
  | 'squirrel'
  | 'suricate'
  | 'weasel';

export type User = {
  name: string;
  fullname: string;
  avatar: string;
  squad: SquadType;
  position: string;
  squadMembers: string[];
};

type CardProps = {
  user: User;
};

export const Card: FC<{user: User}> = ({user}: CardProps) => (
  <Container>
    <PhotoContainer>
      <SquadBadge squad={user.squad}>
        {user.squad === 'octopus' && <Octopus fill="white" width="70%" />}
        {user.squad === 'bee' && <Bee fill="black" width="70%" />}
      </SquadBadge>
      <Photo src={user.avatar} onError={(event) => (event.currentTarget.src = 'http://placekitten.com/400/400')} />
    </PhotoContainer>
    <Name>{user.fullname}</Name>
  </Container>
);

const Container = styled.div`
  box-sizing: border-box;
  width: 63mm;
  height: 88mm;
  border-radius: 5mm;
  background-color: white;
  border: 1px dashed lightgrey;
`;

const PhotoContainer = styled.div`
  padding: 5mm;
  text-align: center;
`;

const Photo = styled.img`
  width: 40mm;
  height: 40mm;
  border-radius: 100%;
  object-fit: cover;
  box-shadow: 1mm 1mm #dfe1f0;
`;

const Name = styled.div`
  text-align: center;
  font-weight: 700;
  color: #52267d;
  font-size: 5mm;
  background-color: #efeff8;
  padding: 2mm;
`;

const SquadBadge = styled.div<{squad: SquadType}>`
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
