import React, {FC} from 'react';
import styled from 'styled-components';
import {SquadBadge} from './SquadBadge';

export type SquadType =
  | 'bees'
  | 'blackhawks'
  | 'chipmunks'
  | 'foxes'
  | 'joker'
  | 'octopus'
  | 'pandas'
  | 'platypus'
  | 'quokka'
  | 'raccoons'
  | 'roosters'
  | 'squirrels'
  | 'suricates'
  | 'weasels';

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

export const Card: FC<CardProps> = ({user}) => (
  <Container>
    <PhotoContainer>
      <SquadBadge squad={user.squad} />
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
