import React, {FC} from 'react';
import styled from 'styled-components';

export type User = {
  name: string
}

const CardContainer = styled.div`
  width: 63mm;
  height: 89mm;
  border: 1px solid red;
`;

type CardProps = {
  user: User;
}

export const Card: FC<{user: User}> = ({user}: CardProps) => <CardContainer>{user.name}</CardContainer>
