// tslint:disable
import * as Sequelize from 'sequelize';


// table: airports
export interface airportsAttribute {
  id:number;
  fs?:string;
  icao?:string;
  name?:string;
  city?:string;
  countryCode?:string;
  countryName?:string;
  regionName?:string;
  timeZoneRegionName?:string;
  localTime?:Date;
  utcOffsetHours?:number;
  latitude?:number;
  longitude?:number;
  elevationFeet?:number;
  classification?:number;
  active?:boolean;
  weatherUrl?:string;
  delayIndexUrl?:string;
  website_url?:string;
  json_data?:any;
  createdAt?:Date;
  updatedAt?:Date;
  meta_data?:any;
}
export interface airportsInstance extends Sequelize.Instance<airportsAttribute>, airportsAttribute { }
export interface airportsModel extends Sequelize.Model<airportsInstance, airportsAttribute> { }

// table: compensation_webform
export interface compensation_webformAttribute {
  id:number;
  timestamp?:number;
  payload?:any;
  data_for_specified_date?:any;
  data_around_specified_date?:any;
  email_sent?:any;
  status?:string;
  createdAt:Date;
  updatedAt:Date;
  remarks?:string;
  meta_data?:any;
  primary_tag?:string;
  followup_mode?:string;
}
export interface compensation_webformInstance extends Sequelize.Instance<compensation_webformAttribute>, compensation_webformAttribute { }
export interface compensation_webformModel extends Sequelize.Model<compensation_webformInstance, compensation_webformAttribute> { }

// table: flights
export interface flightsAttribute {
  id:number;
  airline_code?:string;
  airline_code2?:string;
  flight_number?:string;
  airline_name?:string;
  source_airport_fs?:string;
  source_airport_icao?:string;
  source_airport_name?:string;
  source_city?:string;
  departure_time?:string;
  departure_time_utc?:string;
  departure_terminal?:string;
  destination_airport_fs?:string;
  destination_airport_icao?:string;
  destination_airport_name?:string;
  destination_city?:string;
  arrival_time?:any;
  arrival_time_utc?:any;
  arrival_terminal?:string;
  duration?:number;
  route?:string;
  aircraft?:string;
  days_of_week?:number;
  updatedAt?:Date;
  createdAt?:Date;
  jurisdiction?:string;
}
export interface flightsInstance extends Sequelize.Instance<flightsAttribute>, flightsAttribute { }
export interface flightsModel extends Sequelize.Model<flightsInstance, flightsAttribute> { }

// table: airlines
export interface airlinesAttribute {
  id:number;
  fs?:string;
  iata?:string;
  icao?:string;
  name?:string;
  active?:string;
  phoneNumber?:string;
  nickname1?:string;
  nickname2?:string;
  nickname3?:string;
  nickname4?:string;
  json_data?:any;
  baggage_allowances?:string;
  website?:string;
  createdAt?:Date;
  updatedAt?:Date;
  checkin_link?:string;
  baggage_link?:string;
}
export interface airlinesInstance extends Sequelize.Instance<airlinesAttribute>, airlinesAttribute { }
export interface airlinesModel extends Sequelize.Model<airlinesInstance, airlinesAttribute> { }

// table: jarvis_users
export interface jarvis_usersAttribute {
  id:number;
  email?:string;
  password?:string;
  role?:string;
  createdAt:Date;
  updatedAt:Date;
}
export interface jarvis_usersInstance extends Sequelize.Instance<jarvis_usersAttribute>, jarvis_usersAttribute { }
export interface jarvis_usersModel extends Sequelize.Model<jarvis_usersInstance, jarvis_usersAttribute> { }

// table: emps
export interface empsAttribute {
  firstname?:string;
  lastname?:string;
}
export interface empsInstance extends Sequelize.Instance<empsAttribute>, empsAttribute { }
export interface empsModel extends Sequelize.Model<empsInstance, empsAttribute> { }

// table: auth
export interface authAttribute {
  id:number;
  email?:string;
  password?:string;
  role?:string;
  createdAt:Date;
  updatedAt:Date;
}
export interface authInstance extends Sequelize.Instance<authAttribute>, authAttribute { }
export interface authModel extends Sequelize.Model<authInstance, authAttribute> { }

// table: Listings
export interface ListingsAttribute {
  id:number;
  title?:string;
  description?:string;
  createdAt:Date;
  updatedAt:Date;
}
export interface ListingsInstance extends Sequelize.Instance<ListingsAttribute>, ListingsAttribute { }
export interface ListingsModel extends Sequelize.Model<ListingsInstance, ListingsAttribute> { }
