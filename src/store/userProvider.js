import React from 'react';

const datas = {
  email: '',
  isAuthentified: false
};

export const UserContext = React.createContext({});

export const userContextData = datas;
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

