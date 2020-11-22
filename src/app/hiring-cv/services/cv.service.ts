import { Injectable } from '@angular/core';
import { Personne } from '../cv/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
   firstCV: Personne
   secondCV: Personne
   thirdCV: Personne
  constructor() { 
    
    this.firstCV = {
    id: 1,
    age: 23,
    cin: 1234,
    firstname: "Mike",
    name: "Stewart",
    path: "Path1",
    job: "Engineer"
    };
    
    this.secondCV = {
    id: 2,
    age: 33,
    cin: 5415,
    firstname: "Michael",
    name: "Jordan",
    path: "Path2",
    job: "Doctor"
    };
    
    this.thirdCV = {
    id: 3,
    age: 45,
    cin: 8354,
    firstname: "George",
    name: "Bush",
    path: "Path3",
    job: "Lawyer"
    };
  }
}
