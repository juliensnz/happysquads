import React, {FC} from 'react';
import styled from 'styled-components';
import {Roles} from './Roles';
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
  icon: string;
  tagline: string;
  squadMembers: string[];
};

export const Card: FC<{
  user: User;
  users: {[name: string]: User};
}> = ({user, users}) => {
  return (
    <Container squad={user.squad}>
      <PhotoContainer>
        <SquadBadge squad={user.squad} />
        <Photo
          squad={user.squad}
          src={user.avatar}
          onError={(event) => (event.currentTarget.src = 'http://placekitten.com/400/400')}
        />
      </PhotoContainer>
      <Name squad={user.squad}>{user.fullname}</Name>
      <Description></Description>
      <Roles user={user} users={users} />
    </Container>
  );
};

const Description = styled.div`
  flex: 1;
`;

const Container = styled.div<{squad: SquadType}>`
  box-sizing: border-box;
  width: 63mm;
  height: 88mm;
  background-color: white;
  border: 2mm solid ${(props) => props.theme.squad[props.squad]};
  display: flex;
  flex-direction: column;
`;

const PhotoContainer = styled.div`
  padding: 5mm;
  text-align: center;
`;

const Photo = styled.img<{squad: SquadType}>`
  width: 40mm;
  height: 40mm;
  border-radius: 100%;
  object-fit: cover;
  box-shadow: 1mm 1mm ${(props) => props.theme.squad[props.squad]};
`;

const Name = styled.div<{squad: SquadType}>`
  text-align: center;
  font-weight: 700;
  color: white;
  font-size: 5mm;
  background-color: ${(props) => props.theme.squad[props.squad]};
  padding: 2mm;
`;
