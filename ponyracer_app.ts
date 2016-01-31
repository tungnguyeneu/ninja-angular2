import {Component} from 'angular2/core';
import {RacesCmp} from './races_cmp';

@Component({
  selector: 'ponyracer-app',
  template: `
    <h1>PonyRacer</h1>
    <h2>{{numberOfUsers}} users</h2>
    <h2>Welcome {{user1.name}}</h2>
    <h2>Welcome {{user2?.name}}</h2>
    <races-cmp></races-cmp>
  `,
  directives: [RacesCmp]
})
export class PonyRacerApp {

    numberOfUsers: number = 146;
    
    user1: any = {name: 'home'};
    
    user2: any;
}