import React, {FC} from 'react';
import styled from 'styled-components';

export type User = {
  name: string;
  fullname: string;
  avatar: string;
  squad: string;
  position: string;
  squadMembers: string[]
}

type CardProps = {
  user: User;
}

export const Card: FC<{user: User}> = ({user}: CardProps) => (
<Container>
  <PhotoContainer>
    <Photo src={user.avatar}/>
  </PhotoContainer>
  <Name>{user.fullname}</Name>
  {JSON.stringify(user)}
</Container>
)

const Container = styled.div`
  box-sizing: border-box;
  width: 63mm;
  height: 88mm;
  border-radius: 5mm;
  background-color: white;
  border: 1px dashed lightgrey;
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5mm;
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
