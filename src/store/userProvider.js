import React from 'react';

const datas = {
  email: '',
  isAuthentified: false,
  solde: 0,
  mises: []
};

export const UserContext = React.createContext({});

export const userContextData = datas;
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

