// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  airports:def.airportsModel;
  compensation_webform:def.compensation_webformModel;
  flights:def.flightsModel;
  airlines:def.airlinesModel;
  jarvis_users:def.jarvis_usersModel;
  emps:def.empsModel;
  auth:def.authModel;
  Listings:def.ListingsModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    airports: seq.import(path.join(__dirname, './airports')),
    compensation_webform: seq.import(path.join(__dirname, './compensation_webform')),
    flights: seq.import(path.join(__dirname, './flights')),
    airlines: seq.import(path.join(__dirname, './airlines')),
    jarvis_users: seq.import(path.join(__dirname, './jarvis_users')),
    emps: seq.import(path.join(__dirname, './emps')),
    auth: seq.import(path.join(__dirname, './auth')),
    Listings: seq.import(path.join(__dirname, './Listings')),
  };
  return tables;
};
