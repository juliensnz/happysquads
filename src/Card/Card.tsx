import React, {FC} from 'react';
import styled from 'styled-components';

export type User = {
  name: string;
  squad: string;
  position: string;
}

type CardProps = {
  user: User;
}

export const Card: FC<{user: User}> = ({user}: CardProps) => <Container>{user.name}</Container>

const Container = styled.div`
  width: 63mm;
  height: 88mm;
  border-radius: 5mm;
  background-color: white;
  border: 1px dashed lightgrey;
`;

const Photo = styled.img`
  width: 100%;
  height: 60%;
  border-radius: 5mm 5mm 0 0;
  object-fit: cover;
`;

const Name = styled.div`
  text-align: center;
`;
