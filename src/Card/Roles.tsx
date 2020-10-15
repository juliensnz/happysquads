import React, {FC, useMemo} from 'react';
import styled from 'styled-components';
import {User} from './Card';

export const Roles: FC<{
  user: User;
  users: {[name: string]: User};
}> = ({user, users}) => {
  const roles = useMemo(() => {
    const roles = user.squadMembers
      .map((name) => ({position: users[name].position, icon: users[name].icon}))
      .reduce((result, value) => {
        if (undefined === result[value.position]) {
          result[value.position] = {...value, count: 0};
        }
        result[value.position].count++;
        return result;
      }, {} as {[position: string]: {position: string; icon: string; count: number}});

    return Object.values(roles).map((role) => (
      <Role>
        <Icon>{role.icon.repeat(role.count)}</Icon>
        <JobTitle>{role.position}</JobTitle>
      </Role>
    ));
  }, [user, users]);

  return <RoleContainer>{roles}</RoleContainer>;
};

const Icon = styled.div`
  white-space: nowrap;
`;

const RoleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`;

const Role = styled.div`
  padding: 1mm;
  font-weight: 700;
`;

const JobTitle = styled.div`
  font-size: 2mm;
`;
