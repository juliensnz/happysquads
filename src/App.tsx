import React, {useEffect, useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Card, SquadType, User} from './Card/Card';
import theme from './theme';

const parseCsv = (csv: string): {[name: string]: User} => {
  const lines = csv.split('\n');
  const [headers, ...data] = lines;

  const userKeys = headers.split(',').filter((key) => '' !== key.trim());
  const simpleUsers = data.map(
    (user: string): User => {
      const userValues = user.split(',');

      return userKeys.reduce<User>(
        (result, key, index) => ({
          ...result,
          [key.trim()]: userValues[index],
        }),
        {
          name: '',
          fullname: '',
          avatar: '',
          squad: 'joker',
          position: '',
          icon: '',
          squadMembers: [],
        }
      );
    }
  );

  const users = simpleUsers.map((user: User) => ({
    ...user,
    squad: user.squad.toLocaleLowerCase() as SquadType,
    squadMembers: simpleUsers.filter(({squad}) => squad === user.squad).map(({name}) => name),
  }));

  return users.reduce((result, user) => {
    result[user.name] = user;
    return result;
  }, {} as {[name: string]: User});
};

function App() {
  const [users, setUsers] = useState<{[name: string]: User}>({});

  useEffect(() => {
    fetch('./happysquads/data/users.csv').then(async (value) => setUsers(parseCsv(await value.text())));
  }, []);

  console.log(users);

  const cards = Object.values(users).map((user) => <Card key={user.name} user={user} users={users} />);

  const groups = [];
  for (let i = 0; i < cards.length; i += 9) {
    groups.push(cards.slice(i, i + 9));
  }

  return (
    <ThemeProvider theme={theme}>
      {groups.map((group) => (
        <Container>{group}</Container>
      ))}
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3cm;
`;

export default App;
