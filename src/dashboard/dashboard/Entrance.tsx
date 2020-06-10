import React, { useState, useEffect, useCallback, FC, CSSProperties } from 'react';
import { useVersion, useDataProvider, useQueryWithStore } from 'react-admin';
import { useMediaQuery, Theme } from '@material-ui/core';
import CompanyGrid from './CompanyGrid';
import PlatformGrid from './PlatformGrid';
import jwtDecode from 'jwt-decode';
import request from 'graphql-request';
import { SelectCompanyDocument, SelectPlatformDocument, LoginDocument } from 'generated';
import { print } from 'graphql/language/printer';
import firebase from 'lib/firebase/client';

interface State {
  companies?: any;
  platforms?: any;
  // TODO: come back and use gql generator for types
  //   platforms?: Platform[];
}

const Dashboard: FC = () => {
  const version = useVersion();

  const companyQuery = useQueryWithStore({
    type: 'getMany',
    resource: 'companies',
    payload: {
      sort: { field: 'createdAt', order: 'DESC' },
      pagination: { page: 1, perPage: 50 },
    },
  });

  const platformQuery = useQueryWithStore({
    type: 'getMany',
    resource: 'platforms',
    payload: {
      sort: { field: 'createdAt', order: 'DESC' },
      pagination: { page: 1, perPage: 50 },
    },
  });

  const selectCompany = async (entity) => {
    const selectCompanyResult = await request(process.env.API_URL, print(SelectCompanyDocument), {
      companyId: entity.id,
    });
    console.log('selectCompanyResult', selectCompanyResult);
    const firebaseLogin = await firebase.auth().signInWithCustomToken(selectCompanyResult.selectCompany.token);
    const idToken = await firebaseLogin.user?.getIdToken();
    const result = await request(process.env.API_URL, print(LoginDocument), {
      idToken,
    });

    const decoded = jwtDecode(result.login.token);
    if (decoded && decoded.permissions) {
      localStorage.setItem('permissions', JSON.stringify(decoded.permissions));
    }
    localStorage.setItem('session', result.login.token);
    localStorage.setItem('user', JSON.stringify(result.login.user));
    window.location.replace('/dashboard');
  };
  const selectPlatform = async (entity) => {
    const selectPlatformResult = await request(process.env.API_URL, print(SelectPlatformDocument), {
      companyId: entity.id,
    });

    const firebaseLogin = await firebase.auth().signInWithCustomToken(selectPlatformResult.selectPlatform.token);
    const idToken = await firebaseLogin.user?.getIdToken();
    const result = await request(process.env.API_URL, print(LoginDocument), {
      idToken,
    });

    const decoded = jwtDecode(result.login.token);
    if (decoded && decoded.permissions) {
      localStorage.setItem('permissions', JSON.stringify(decoded.permissions));
    }
    localStorage.setItem('session', result.login.token);
    localStorage.setItem('user', JSON.stringify(result.login.user));
    window.location.replace('/dashboard');
  };

  // const loginAdmin = async (url, entity) => {
  //   let body = '';
  //   if (entity === 'platform') {
  //     body = JSON.stringify({
  //       platformId: entity.id,
  //     });
  //   } else {
  //     body = JSON.stringify({
  //       companyId: entity.id,
  //     });
  //   }

  //   const response = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + localStorage.getItem('token'),
  //     },
  //     body,
  //   });
  //   const json: any = await response.json();
  //   localStorage.setItem('token', json.token);
  //   const decoded = jwtDecode(json.token);

  //   if (decoded && decoded.permissions) {
  //     localStorage.setItem('permissions', JSON.stringify(decoded.permissions));
  //   }
  //   localStorage.setItem('user', JSON.stringify(json.user));
  //   window.location.replace('/');
  // };

  return (
    <div>
      <h2>My Companies</h2>
      <CompanyGrid selectCompany={selectCompany} companies={companyQuery} />
      <h2>My Platforms</h2>
      <PlatformGrid selectPlatform={selectPlatform} platforms={platformQuery} />
    </div>
  );
};

export default Dashboard;
