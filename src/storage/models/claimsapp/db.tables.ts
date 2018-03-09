// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  claims:def.claimsModel;
  api_data:def.api_dataModel;
  users:def.usersModel;
  n:def.nModel;
  email_campaigns:def.email_campaignsModel;
  email_templates:def.email_templatesModel;
  case_details:def.case_detailsModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
  const tables:ITables = {
    claims: seq.import(path.join(__dirname, './claims')),
    api_data: seq.import(path.join(__dirname, './api_data')),
    users: seq.import(path.join(__dirname, './users')),
    n: seq.import(path.join(__dirname, './n')),
    email_campaigns: seq.import(path.join(__dirname, './email_campaigns')),
    email_templates: seq.import(path.join(__dirname, './email_templates')),
    case_details: seq.import(path.join(__dirname, './case_details')),
  };
  return tables;
};
