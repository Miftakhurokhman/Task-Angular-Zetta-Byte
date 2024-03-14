import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentorService {
  private dataUrl = 'assets/mentor.json';
  private MentorSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    this.loadDataFromJson();
  }

  private loadDataFromJson() {
    this.http.get<any[]>(this.dataUrl).subscribe(data => {
      this.MentorSubject.next(data);
    });
  }

  getAllMentor(): Observable<any[]> {
    return this.MentorSubject.asObservable();
  }

  getMentor(id: string): Observable<any> {
    return this.MentorSubject.pipe(
      map(Mentors => {
        const foundMentor = Mentors.find(Mentor => Mentor._id === id);
        return foundMentor ? foundMentor : "Tidak menemukan data";
      })
    );
  }

  addNewMentor(newMentor: any): Observable<any> {
    const currentMentors = this.MentorSubject.getValue();
    currentMentors.push(newMentor);
    this.MentorSubject.next(currentMentors);

    return new Observable(observer => {
      observer.complete();
    });
  }

  deleteMentor(id: string) {
    let currentMentors = this.MentorSubject.getValue();
    const index = currentMentors.findIndex(mentor => mentor._id === id);
    if (index !== -1) {
      currentMentors.splice(index, 1);
      this.MentorSubject.next(currentMentors);
    }
  }

  updateMentor(updatedObject: any) {
    let currentMentors = this.MentorSubject.getValue();
    const index = currentMentors.findIndex(mentor => mentor._id === updatedObject._id);
    if (index !== -1) {
      currentMentors[index] = updatedObject;
      this.MentorSubject.next(currentMentors);
    }
  }

  generateID():string {
    const listMentor = this.MentorSubject.value;
    const listLength = listMentor.length;
    const id = +listMentor[listLength-1]._id + 1;
    return id.toString()
  }
}
