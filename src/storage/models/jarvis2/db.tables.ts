// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  notifications:def.notificationsModel;
  claims_temp:def.claims_tempModel;
  claims_flight_data:def.claims_flight_dataModel;
  users:def.usersModel;
  email_templates:def.email_templatesModel;
  claims_flight_data_old:def.claims_flight_data_oldModel;
  claims_test:def.claims_testModel;
  email_campaigns:def.email_campaignsModel;
  test2:def.test2Model;
  jarvis_users:def.jarvis_usersModel;
  SequelizeMeta:def.SequelizeMetaModel;
  claims:def.claimsModel;
  case_details:def.case_detailsModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    notifications: seq.import(path.join(__dirname, './notifications')),
    claims_temp: seq.import(path.join(__dirname, './claims_temp')),
    claims_flight_data: seq.import(path.join(__dirname, './claims_flight_data')),
    users: seq.import(path.join(__dirname, './users')),
    email_templates: seq.import(path.join(__dirname, './email_templates')),
    claims_flight_data_old: seq.import(path.join(__dirname, './claims_flight_data_old')),
    claims_test: seq.import(path.join(__dirname, './claims_test')),
    email_campaigns: seq.import(path.join(__dirname, './email_campaigns')),
    test2: seq.import(path.join(__dirname, './test2')),
    jarvis_users: seq.import(path.join(__dirname, './jarvis_users')),
    SequelizeMeta: seq.import(path.join(__dirname, './SequelizeMeta')),
    claims: seq.import(path.join(__dirname, './claims')),
    case_details: seq.import(path.join(__dirname, './case_details')),
  };
  return tables;
};
