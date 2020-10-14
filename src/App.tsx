import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Card, User} from './Card/Card';

const parseCsv = (csv: string): User[] => {
  const lines = csv.split('\n');
  const [headers, ...data] = lines;

  const userKeys = headers.split(';').filter((key) => '' !== key.trim());
  const simpleUsers = data.map(
    (user: string): User => {
      const userValues = user.split(';');

      return userKeys.reduce<User>(
        (result, key, index) => ({
          ...result,
          [key.trim()]: userValues[index],
        }),
        {
          name: '',
          fullname: 'Paul Chasle',
          avatar: '',
          squad: 'octopus',
          position: '',
          squadMembers: [],
        }
      );
    }
  );

  return simpleUsers.map((user: User) => ({
    ...user,
    squadMembers: simpleUsers.filter(({squad}) => squad === user.squad).map(({name}) => name),
  }));
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('./happysquads/data/users.csv').then(async (value) => setData(await value.text()));
  }, []);

  const users = parseCsv(data);
  console.log(users);
  return (
    <Container>
      {users.map((user) => (
        <Card key={user.name} user={user} />
      ))}
    </Container>
  );
}

export default App;
