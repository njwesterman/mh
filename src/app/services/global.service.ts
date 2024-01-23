import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import * as _ from 'lodash' 

@Injectable({
  providedIn: 'root',
})


export class GlobalService {

configData = [];
speechData = [];
speechConfig = [];
voiceData = [];
playerData = [];
soundData = [];

languageCode = 'en'

constructor(private http: HttpClient) {
  this.loadConfig().subscribe();
  this.loadPlayers().subscribe();
  this.loadSpeechData().subscribe();
  this.loadVoiceData().subscribe();
  this.loadSoundData().subscribe();
}



   loadConfig(): Observable<any> {
    console.log('start')
   
    return this.http.get('./assets/data/config.json').pipe(
            tap(data => {
                          
              this.configData = data;
          //   console.log('data');
          //    console.log(data)
            }
    ));

    }

    loadPlayers(): Observable<any> {
      console.log('start')
     
      return this.http.get('./assets/data/'+this.languageCode+'/players.json').pipe(
              tap(data => {this.playerData = data;
             //  console.log('data');
            //    console.log(data)
              }
      ));
  
      }


  loadSpeechData(): Observable<any> {
    console.log('start')
   
    return this.http.get('./assets/data/'+this.languageCode+'/speechEngine.json').pipe(
            tap(data => { this.speechData = data;
              
              
              //this.speechData = data.speechEngine.players[this.languageCode];
          
   
              this.speechConfig = data.speechEngine.config;
              //  console.log('mommy');
              //console.log(data)
            }
    ));

    }


    
  loadVoiceData(): Observable<any> {
    console.log('start')
   
    return this.http.get('./assets/data/'+this.languageCode+'/voiceEngine.json').pipe(
            tap(data => {this.voiceData = data;
          //   console.log('data');
            //  console.log(data)
            }
    ));

    }

    loadSoundData(): Observable<any> {
      console.log('start')
     
      return this.http.get('./assets/data/'+this.languageCode+'/soundEngine.json').pipe(
              tap(data => {this.soundData = data;
            //   console.log('data');
              //  console.log(data)
              }
      ));
  
      }


    async sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }


  }


