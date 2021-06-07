import { Component, OnInit } from '@angular/core';

export interface DisasterDec {
  disasterNumber: number;
  declarationDate: string;
  disasterName: string;
  declarationType: string;
  stateName: string;
  incidentType: string;
}

const DISASTER_DEC: DisasterDec[] = [
  {disasterNumber: 3553, declarationDate: '2021-01-11', disasterName:	'59TH PRESIDENTIAL INAUGURATION',	declarationType: 'Emergency',	stateName: 'District of Columbia', incidentType: 'Other'},
  {disasterNumber: 3554, declarationDate: '2021-02-14',	disasterName: 'SEVERE WINTER STORM', declarationType: 'Emergency',	stateName: 'Texas',	incidentType: 'Severe Ice Storm'},
  {disasterNumber: 3555, declarationDate:	'2021-02-17',	disasterName: 'SEVERE WINTER STORM', declarationType: 'Emergency',	stateName: 'Oklahoma',incidentType:	'Severe Ice Storm'},
  {disasterNumber: 3556, declarationDate:	'2021-02-18',	disasterName: 'SEVERE WINTER STORM', declarationType: 'Emergency',	stateName: 'Louisiana',	incidentType: 'Severe Ice Storm'},
  {disasterNumber: 4586, declarationDate:	'2021-02-19',	disasterName: 'SEVERE WINTER STORMS',	declarationType: 'Major Disaster',	stateName: 'Texas',	incidentType: 'Severe Ice Storm'},
  {disasterNumber: 4587, declarationDate:	'2021-02-24',	disasterName: 'SEVERE WINTER STORMS',	declarationType: 'Major Disaster',	stateName: 'Oklahoma',	incidentType: 'Severe Ice Storm'},
  {disasterNumber: 4589, declarationDate:	'2021-03-04',	disasterName: 'STRAIGHT-LINE WINDS', declarationType: 'Major Disaster',	stateName: 'Idaho',	incidentType: 'Severe Storm(s)'},
  {disasterNumber: 4590, declarationDate:	'2021-03-09',	disasterName: 'SEVERE WINTER STORMS',	declarationType: 'Major Disaster',	stateName: 'Louisiana',	incidentType: 'Severe Ice Storm'},
  {disasterNumber: 5384, declarationDate:	'2021-03-29',	disasterName: 'SCHROEDER FIRE',	declarationType: 'Fire Management',	stateName: 'South Dakota',	incidentType: 'Fire'},
  {disasterNumber: 4592, declarationDate:	'2021-03-31',	disasterName: 'SEVERE WINTER STORMS, LANDSLIDES, AND MUDSLIDES',	declarationType: 'Major Disaster',	stateName: 'Kentucky',	incidentType: 'Severe Ice Storm'},
  {disasterNumber: 5385, declarationDate:	'2021-04-08',	disasterName: 'MARGO FIRE',	declarationType: 'Fire Management',	stateName: 'Arizona',	incidentType: 'Fire'},
  {disasterNumber: 4594, declarationDate:	'2021-04-21',	disasterName: 'SEVERE WINTER STORMS',	declarationType: 'Major Disaster',	stateName: 'Tennessee',	incidentType: 'Severe Ice Storm'},
  {disasterNumber: 4595, declarationDate:	'2021-04-23',	disasterName: 'SEVERE, STORMS, FLOODING, LANDSLIDES, AND MUDSLIDES',	declarationType: 'Major Disaster',	stateName: 'Kentucky', incidentType:	'Flood'},
  {disasterNumber: 4596, declarationDate:	'2021-04-26',	disasterName: 'SEVERE STORMS, STRAIGHT-LINE WINDS, AND TORNADOES',	declarationType: 'Major Disaster',	stateName: 'Alabama',	incidentType: 'Severe Storm(s)'},
  {disasterNumber: 5386, declarationDate:	'2021-04-27',	disasterName: 'THREE RIVERS FIRE',	declarationType: 'Fire Management',	stateName: 'New Mexico',	incidentType: 'Fire'},
  {disasterNumber: 4597, declarationDate:	'2021-04-28',	disasterName: 'SEVERE WINTER STORM AND SNOWSTORM',	declarationType: 'Major Disaster',	stateName: 'New Jersey',	incidentType: 'Snow'},
  {disasterNumber: 4598, declarationDate:	'2021-05-04',	disasterName: 'SEVERE WINTER STORMS',	declarationType: 'Major Disaster',	stateName: 'Mississippi',	incidentType: 'Severe Ice Storm'},
  {disasterNumber: 4599, declarationDate:	'2021-05-04',	disasterName: 'OR WINTER STORM 02-13-2021',	declarationType: 'Major Disaster',	stateName: 'Oregon',	incidentType: 'Severe Storm(s)'},
  {disasterNumber: 4600, declarationDate:	'2021-05-05',	disasterName: 'SEVERE STORMS AND TORNADOES',declarationType:	'Major Disaster',	stateName: 'Georgia',	incidentType: 'Severe Storm(s)'},
  {disasterNumber: 4601, declarationDate:	'2021-05-08',	disasterName: 'SEVERE STORMS, TORNADOES, AND FLOODING',	declarationType: 'Major Disaster',	stateName: 'Tennessee',	incidentType: 'Tornado'},
  (disasterNumber: 4602, declarationDate:	'2021-05-10',	disasterName: 'SEVERE WINTER STORMS',	declarationType: 'Major Disaster',	stateName: 'Virginia',	incidentType: 'Severe Ice Storm'},
  {disasterNumber: 4603, declarationDate:	'2021-05-13',	disasterName: 'SEVERE WINTER STORMS',	declarationType: 'Major Disaster',	stateName: 'West Virginia',	incidentType: 'Severe Ice Storm'},
  {disasterNumber: 4604, declarationDate:	'2021-05-13',	disasterName: 'SEVERE STORMS, FLOODING, AND LANDSLIDES', declarationType:	'Major Disaster',	stateName: 'Hawaii',	incidentType: 'Flood'},
  {disasterNumber: 4605, declarationDate:	'2021-05-20',	disasterName: 'SEVERE STORMS AND FLOODING',	declarationType: 'Major Disaster',	stateName: 'West Virginia',	incidentType: 'Flood'},
  {disasterNumber: 5387, declarationDate:	'2021-05-27',	disasterName: 'SPUR FIRE',	declarationType: 'Fire Management',	stateName: 'Arizona',	incidentType: 'Fire'},
  {disasterNumber: 4606, declarationDate:	'2021-06-02',	disasterName: 'SEVERE STORMS, TORNADOES, AND FLOODING',	declarationType: 'Major Disaster',	stateName: 'Louisiana',	incidentType: 'Flood'},
];
/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DataTableComponent {
  displayedColumns: string[] = ['disasterNumber', 'declarationDate', 'disasterName', 'declarationType', 'stateName', 'incidentType'];
  dataSource = DISASTER_DEC;
}



