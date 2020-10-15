import React, {useEffect, useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Card, SquadType, User} from './Card/Card';
import theme from './theme';

const buildUser = (userCsv: string, metaCsv: string) => {
  const simpleUsers = parseCsv(userCsv, ',');
  const meta = parseCsv(metaCsv, ';');
  console.log(meta);
  const users = simpleUsers.map((user: User) => ({
    squad: 'joker',
    ...user,
    squad: user.squad.toLocaleLowerCase() as SquadType,
    squadMembers: simpleUsers.filter(({squad}: any) => squad === user.squad).map(({name}: any) => name),
    meta: meta.find(({name}: any) => name === user.name),
  }));

  return users.reduce((result: any, user: any) => {
    result[user.name] = user;

    return result;
  }, {} as {[name: string]: User});
}

const parseCsv = (csv: string, spliter: string): {[name: string]: any} => {
  const lines = csv.split('\n');
  const [headers, ...data] = lines;

  const userKeys = headers.split(spliter).filter((key) => '' !== key.trim());
  return data.map(
    (line: string): any => {
      const values = line.split(spliter);

      return userKeys.reduce<any>(
        (result, key, index) => ({
          ...result,
          [key.trim()]: values[index],
        }),
        {}
      );
    }
  );
};

function App() {
  const [users, setUsers] = useState<{[name: string]: User}>({});

  useEffect(() => {
    Promise.all([fetch('./happysquads/data/users.csv'), fetch('./happysquads/data/meta.csv')])
      .then(async ([users, meta]) => setUsers(buildUser(await users.text(), await meta.text())));
  }, []);

  console.log(users);

  const cards = Object.values(users).map((user) => <Card key={user.name} user={user} users={users} />);

  const groups = [];
  for (let i = 0; i < cards.length; i += 9) {
    groups.push(cards.slice(i, i + 9));
  }

  return (
    <ThemeProvider theme={theme}>
      {groups.map((group, index) => (
        <Container key={index}>{group}</Container>
      ))}
    </ThemeProvider>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3cm;
  -webkit-print-color-adjust: exact;
  -moz-print-color-adjust: exact;
  print-color-adjust: exact;
  @media print {
    margin-bottom: 3cm;
  }
`;

export default App;
