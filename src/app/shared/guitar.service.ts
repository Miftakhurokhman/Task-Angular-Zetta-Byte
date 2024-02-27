 import { Injectable } from '@angular/core';
 import { Observable, BehaviorSubject, map } from 'rxjs';
 
 @Injectable({
   providedIn: 'root'
 })
 export class GuitarService {
 
   private guitarListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
 
   constructor() { 
     this.initializeGuitarList();
   }
 
   private initializeGuitarList() {
     const initialGuitarList = [
      {
        "merk": "Yamaha",
        "serial": "FG600",
        "image_url": "https://d1aeri3ty3izns.cloudfront.net/media/16/167067/1200/preview.jpg",
        "price": 2600000,
        "type": "Akustik",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam nihil aspernatur voluptatibus quia magni velit, in dolore repellendus consequatur iste aut nulla hic, doloribus, rerum expedita! Non eos, nihil, consequuntur aut nemo vel velit voluptatibus architecto nisi accusamus voluptas adipisci!",
        "like": true
      },
      {
        "merk": "Fender",
        "serial": "Stratocaster",
        "image_url": "https://th.bing.com/th/id/R.6562667e8bd4abf6228177854b96c7c6?rik=mZZmGQHVCSsxvg&riu=http%3a%2f%2fxelectrical.com%2fimages%2f13037.jpg&ehk=s4Eu2z0WeKUjibZ8ATGt8fTuTER9dGFw8SjOhsTJy8I%3d&risl=&pid=ImgRaw&r=0",
        "price": 3500000,
        "type": "Elektrik",
        "description": "The Fender Stratocaster is a model of electric guitar designed from 1952 into 1954 by Leo Fender, Bill Carson, George Fullerton, and completed by Freddie Tavares.",
        "like": false
      },
      {
        "merk": "Gibson",
        "serial": "Les Paul",
        "image_url": "https://img.audiofanzine.com/images/u/product/normal/gibson-les-paul-standard-bass-lpb-3-73608.jpg",
        "price": 4200000,
        "type": "Elektrik",
        "description": "The Gibson Les Paul is a solid body electric guitar that was first sold by the Gibson Guitar Corporation in 1952.",
        "like": false
      },
      {
        "merk": "Martin",
        "serial": "D-28",
        "image_url": "https://2.bp.blogspot.com/-ypkxOjIFTbc/XAxDgzrF2AI/AAAAAAAA0I8/4gjf3UWW2ewArliQORyaP5SYg20H3LF4wCLcBGAs/s1600/d28-2.jpg",
        "price": 4800000,
        "type": "Akustik",
        "description": "The Martin D-28 is a dreadnought-style acoustic guitar made by C.F. Martin & Company of Nazareth, Pennsylvania.",
        "like": false
      },
      {
        "merk": "Taylor",
        "serial": "214ce",
        "image_url": "https://www.taylorguitars.com/sites/default/files/styles/guitar_desktop/public/2022-02-08/214ce-Front.png?itok=hXaNIBqR",
        "price": 3200000,
        "type": "Akustik",
        "description": "The Taylor 214ce is a versatile acoustic-electric guitar that features Taylor's signature Grand Auditorium body style.",
        "like": false
      },
      {
        "merk": "Ibanez",
        "serial": "RG550",
        "image_url": "https://medias.audiofanzine.com/images/normal/ibanez-rg550-520996.jpg",
        "price": 2800000,
        "type": "Elektrik",
        "description": "The Ibanez RG550 is a series of electric guitars produced by Hoshino Gakki and sold under the Ibanez brand.",
        "like": false
      },
      {
        "merk": "PRS",
        "serial": "Custom 24",
        "image_url": "https://th.bing.com/th/id/R.6562667e8bd4abf6228177854b96c7c6?rik=mZZmGQHVCSsxvg&riu=http%3a%2f%2fxelectrical.com%2fimages%2f13037.jpg&ehk=s4Eu2z0WeKUjibZ8ATGt8fTuTER9dGFw8SjOhsTJy8I%3d&risl=&pid=ImgRaw&r=0",
        "price": 5500000,
        "type": "Elektrik",
        "description": "The PRS Custom 24 is the quintessential PRS guitar, the iconic instrument that started it all back in 1985.",
        "like": false
      },
      {
        "merk": "Epiphone",
        "serial": "Les Paul Standard",
        "image_url": "https://th.bing.com/th/id/R.6562667e8bd4abf6228177854b96c7c6?rik=mZZmGQHVCSsxvg&riu=http%3a%2f%2fxelectrical.com%2fimages%2f13037.jpg&ehk=s4Eu2z0WeKUjibZ8ATGt8fTuTER9dGFw8SjOhsTJy8I%3d&risl=&pid=ImgRaw&r=0",
        "price": 1800000,
        "type": "Elektrik",
        "description": "The Epiphone Les Paul Standard is a classic guitar model that captures the essence of the original Gibson Les Paul.",
        "like": false
      },
      {
        "merk": "Cort",
        "serial": "Earth 70",
        "image_url": "https://th.bing.com/th/id/R.6562667e8bd4abf6228177854b96c7c6?rik=mZZmGQHVCSsxvg&riu=http%3a%2f%2fxelectrical.com%2fimages%2f13037.jpg&ehk=s4Eu2z0WeKUjibZ8ATGt8fTuTER9dGFw8SjOhsTJy8I%3d&risl=&pid=ImgRaw&r=0",
        "price": 1500000,
        "type": "Akustik",
        "description": "The Cort Earth 70 is a dreadnought-style acoustic guitar with a solid spruce top and mahogany back and sides.",
        "like": false
      },
      {
        "merk": "Jackson",
        "serial": "Soloist SL2",
        "image_url": "https://th.bing.com/th/id/R.6562667e8bd4abf6228177854b96c7c6?rik=mZZmGQHVCSsxvg&riu=http%3a%2f%2fxelectrical.com%2fimages%2f13037.jpg&ehk=s4Eu2z0WeKUjibZ8ATGt8fTuTER9dGFw8SjOhsTJy8I%3d&risl=&pid=ImgRaw&r=0",
        "price": 3000000,
        "type": "Elektrik",
        "description": "The Jackson Soloist SL2 is a high-performance electric guitar designed for speed and precision.",
        "like": false
      },
      {
        "merk": "Gretsch",
        "serial": "G5420T",
        "image_url": "https://th.bing.com/th/id/R.6562667e8bd4abf6228177854b96c7c6?rik=mZZmGQHVCSsxvg&riu=http%3a%2f%2fxelectrical.com%2fimages%2f13037.jpg&ehk=s4Eu2z0WeKUjibZ8ATGt8fTuTER9dGFw8SjOhsTJy8I%3d&risl=&pid=ImgRaw&r=0",
        "price": 3800000,
        "type": "Elektrik",
        "description": "The Gretsch G5420T is a hollow body electric guitar known for its vintage-style sound and iconic design.",
        "like": false
      },
      {
        "merk": "Seagull",
        "serial": "S6 Original",
        "image_url": "https://th.bing.com/th/id/R.6562667e8bd4abf6228177854b96c7c6?rik=mZZmGQHVCSsxvg&riu=http%3a%2f%2fxelectrical.com%2fimages%2f13037.jpg&ehk=s4Eu2z0WeKUjibZ8ATGt8fTuTER9dGFw8SjOhsTJy8I%3d&risl=&pid=ImgRaw&r=0",
        "price": 1900000,
        "type": "Akustik",
        "description": "The Seagull S6 Original is a high-quality acoustic guitar made with solid cedar and wild cherry.",
        "like": false
      }
    ];
     this.guitarListSubject.next(initialGuitarList);
   }
 
   getGuitars(): Observable<any[]> {
     return this.guitarListSubject.asObservable();
   }

   getGuitar(): Observable<any[]> {
    return this.guitarListSubject.pipe(
      map(guitars => (guitars.length > 0) ? guitars[0] : null)
    );
  }
 
   updateLikeStatus(index: number) {
     const currentGuitars = this.guitarListSubject.getValue();
     currentGuitars[index].like = !currentGuitars[index].like;
     this.guitarListSubject.next(currentGuitars);
   }
 }
 