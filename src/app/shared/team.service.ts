import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private TeamSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private SearchSubject: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() {this.initializeTeam()}

  private initializeTeam() {
    const initialTeam = [{
        id: "asa",
        name: 'Scott Carson',
        birthPlace: 'London',
        nationality : 'Inggris',
        dateOfBirth: '2002-02-02',
        profileImage: 'https://www.mancity.com/meta/media/ejhjw1j4/scott-carson.png?width=376&quality=100',
        position: 'Keeper',
        joiningDate: '2002-02-02',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium beatae culpa necessitatibus ipsam dicta nam modi totam facilis ut voluptatum. Totam, nisi. Autem, beatae. Voluptatem quo repellat quaerat dolorem vitae beatae facere ex unde natus obcaecati? Reiciendis reprehenderit rem minima maiores unde provident quis molestias iure eos voluptas! Voluptas deleniti cupiditate consequuntur, voluptates repellat eos dolore. Ipsa quaerat doloremque itaque dolorum, quia sequi. Dolorum porro dignissimos velit quae molestias quibusdam perspiciatis, blanditiis aspernatur repellat soluta quas vitae aut similique nobis aliquid aperiam iure quasi beatae et obcaecati numquam provident commodi molestiae sed. Quo ullam ipsum culpa rerum, unde beatae. Accusamus?",
        achievements : []
      },
      {
        id: "asdasd",
        name: 'Ederson',
        birthPlace: 'London',
        nationality : 'Brazil',
        dateOfBirth: '2002-02-02',
        profileImage: 'https://www.mancity.com/meta/media/pjbbld2d/ederson.png?width=376&quality=100',
        position: 'Keeper',
        joiningDate: '2002-02-02',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium beatae culpa necessitatibus ipsam dicta nam modi totam facilis ut voluptatum. Totam, nisi. Autem, beatae. Voluptatem quo repellat quaerat dolorem vitae beatae facere ex unde natus obcaecati? Reiciendis reprehenderit rem minima maiores unde provident quis molestias iure eos voluptas! Voluptas deleniti cupiditate consequuntur, voluptates repellat eos dolore. Ipsa quaerat doloremque itaque dolorum, quia sequi. Dolorum porro dignissimos velit quae molestias quibusdam perspiciatis, blanditiis aspernatur repellat soluta quas vitae aut similique nobis aliquid aperiam iure quasi beatae et obcaecati numquam provident commodi molestiae sed. Quo ullam ipsum culpa rerum, unde beatae. Accusamus?",
        achievements : []
      },
      {
        id: "asderfasd",
        name: 'Stefan Ortega Moreno',
        birthPlace: 'London',
        nationality : 'Jerman',
        dateOfBirth: '2002-02-02',
        profileImage: 'https://www.mancity.com/meta/media/hhfbwcql/stefan-ortega-moreno.png?width=376&quality=100',
        position: 'Keeper',
        joiningDate: '2002-02-02',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium beatae culpa necessitatibus ipsam dicta nam modi totam facilis ut voluptatum. Totam, nisi. Autem, beatae. Voluptatem quo repellat quaerat dolorem vitae beatae facere ex unde natus obcaecati? Reiciendis reprehenderit rem minima maiores unde provident quis molestias iure eos voluptas! Voluptas deleniti cupiditate consequuntur, voluptates repellat eos dolore. Ipsa quaerat doloremque itaque dolorum, quia sequi. Dolorum porro dignissimos velit quae molestias quibusdam perspiciatis, blanditiis aspernatur repellat soluta quas vitae aut similique nobis aliquid aperiam iure quasi beatae et obcaecati numquam provident commodi molestiae sed. Quo ullam ipsum culpa rerum, unde beatae. Accusamus?",
        achievements : []
      },
      {
        id: "asasedasd",
        name: 'Nathan Ake',
        birthPlace: 'London',
        nationality : 'Belanda',
        dateOfBirth: '2002-02-02',
        profileImage: 'https://www.mancity.com/meta/media/lyxf1bib/nathan-ake.png?width=376&quality=100',
        position: 'Defender',
        joiningDate: '2002-02-02',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium beatae culpa necessitatibus ipsam dicta nam modi totam facilis ut voluptatum. Totam, nisi. Autem, beatae. Voluptatem quo repellat quaerat dolorem vitae beatae facere ex unde natus obcaecati? Reiciendis reprehenderit rem minima maiores unde provident quis molestias iure eos voluptas! Voluptas deleniti cupiditate consequuntur, voluptates repellat eos dolore. Ipsa quaerat doloremque itaque dolorum, quia sequi. Dolorum porro dignissimos velit quae molestias quibusdam perspiciatis, blanditiis aspernatur repellat soluta quas vitae aut similique nobis aliquid aperiam iure quasi beatae et obcaecati numquam provident commodi molestiae sed. Quo ullam ipsum culpa rerum, unde beatae. Accusamus?",
        achievements : []
      },
      {
        id: "rerf",
        name: 'Joao Cancelo',
        birthPlace: 'London',
        nationality : 'Portugal',
        dateOfBirth: '2002-02-02',
        profileImage: 'https://www.mancity.com/meta/media/pm3b0zop/joao-cancelo.png?width=376&quality=100',
        position: 'Defender',
        joiningDate: '2002-02-02',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium beatae culpa necessitatibus ipsam dicta nam modi totam facilis ut voluptatum. Totam, nisi. Autem, beatae. Voluptatem quo repellat quaerat dolorem vitae beatae facere ex unde natus obcaecati? Reiciendis reprehenderit rem minima maiores unde provident quis molestias iure eos voluptas! Voluptas deleniti cupiditate consequuntur, voluptates repellat eos dolore. Ipsa quaerat doloremque itaque dolorum, quia sequi. Dolorum porro dignissimos velit quae molestias quibusdam perspiciatis, blanditiis aspernatur repellat soluta quas vitae aut similique nobis aliquid aperiam iure quasi beatae et obcaecati numquam provident commodi molestiae sed. Quo ullam ipsum culpa rerum, unde beatae. Accusamus?",
        achievements : []
      },
      {
        id: "wesf",
        name: 'Kevin De Bruyne',
        birthPlace: 'London',
        nationality : 'Belgia',
        dateOfBirth: '2002-02-02',
        profileImage: 'https://www.mancity.com/meta/media/z00hnhu0/kevin-de-bruyne.png?width=376&quality=100',
        position: 'Midfilder',
        joiningDate: '2002-02-02',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium beatae culpa necessitatibus ipsam dicta nam modi totam facilis ut voluptatum. Totam, nisi. Autem, beatae. Voluptatem quo repellat quaerat dolorem vitae beatae facere ex unde natus obcaecati? Reiciendis reprehenderit rem minima maiores unde provident quis molestias iure eos voluptas! Voluptas deleniti cupiditate consequuntur, voluptates repellat eos dolore. Ipsa quaerat doloremque itaque dolorum, quia sequi. Dolorum porro dignissimos velit quae molestias quibusdam perspiciatis, blanditiis aspernatur repellat soluta quas vitae aut similique nobis aliquid aperiam iure quasi beatae et obcaecati numquam provident commodi molestiae sed. Quo ullam ipsum culpa rerum, unde beatae. Accusamus?",
        achievements : []
      },
      {
        id: "wsaesf",
        name: 'Phil Foden',
        birthPlace: 'London',
        nationality : 'Inggris',
        dateOfBirth: '2002-02-02',
        profileImage: 'https://www.mancity.com/meta/media/apzpgmcj/phil-foden.png?width=376&quality=100',
        position: 'Midfilder',
        joiningDate: '2002-02-02',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium beatae culpa necessitatibus ipsam dicta nam modi totam facilis ut voluptatum. Totam, nisi. Autem, beatae. Voluptatem quo repellat quaerat dolorem vitae beatae facere ex unde natus obcaecati? Reiciendis reprehenderit rem minima maiores unde provident quis molestias iure eos voluptas! Voluptas deleniti cupiditate consequuntur, voluptates repellat eos dolore. Ipsa quaerat doloremque itaque dolorum, quia sequi. Dolorum porro dignissimos velit quae molestias quibusdam perspiciatis, blanditiis aspernatur repellat soluta quas vitae aut similique nobis aliquid aperiam iure quasi beatae et obcaecati numquam provident commodi molestiae sed. Quo ullam ipsum culpa rerum, unde beatae. Accusamus?",
        achievements : []
      },
      {
        id: "sedefa",
        name: 'Julian Alvarez',
        birthPlace: 'London',
        nationality : 'Argentina',
        dateOfBirth: '2002-02-02',
        profileImage: 'https://www.mancity.com/meta/media/4vwjsfxg/julian-alvarez.png?width=376&quality=100',
        position: 'Foward',
        joiningDate: '2002-02-02',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium beatae culpa necessitatibus ipsam dicta nam modi totam facilis ut voluptatum. Totam, nisi. Autem, beatae. Voluptatem quo repellat quaerat dolorem vitae beatae facere ex unde natus obcaecati? Reiciendis reprehenderit rem minima maiores unde provident quis molestias iure eos voluptas! Voluptas deleniti cupiditate consequuntur, voluptates repellat eos dolore. Ipsa quaerat doloremque itaque dolorum, quia sequi. Dolorum porro dignissimos velit quae molestias quibusdam perspiciatis, blanditiis aspernatur repellat soluta quas vitae aut similique nobis aliquid aperiam iure quasi beatae et obcaecati numquam provident commodi molestiae sed. Quo ullam ipsum culpa rerum, unde beatae. Accusamus?",
        achievements : []
      },
      {
        id: "seaseefa",
        name: 'Erling Haaland',
        birthPlace: 'London',
        nationality : 'Norwegia',
        dateOfBirth: '2002-02-02',
        profileImage: 'https://www.mancity.com/meta/media/jybffupz/erling-haaland.png?width=376&quality=100',
        position: 'Foward',
        joiningDate: '2002-02-02',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium beatae culpa necessitatibus ipsam dicta nam modi totam facilis ut voluptatum. Totam, nisi. Autem, beatae. Voluptatem quo repellat quaerat dolorem vitae beatae facere ex unde natus obcaecati? Reiciendis reprehenderit rem minima maiores unde provident quis molestias iure eos voluptas! Voluptas deleniti cupiditate consequuntur, voluptates repellat eos dolore. Ipsa quaerat doloremque itaque dolorum, quia sequi. Dolorum porro dignissimos velit quae molestias quibusdam perspiciatis, blanditiis aspernatur repellat soluta quas vitae aut similique nobis aliquid aperiam iure quasi beatae et obcaecati numquam provident commodi molestiae sed. Quo ullam ipsum culpa rerum, unde beatae. Accusamus?",
        achievements : []
      },
      {
        id: "sdefes",
        name: 'Pep Guardiola',
        birthPlace: 'London',
        nationality : 'Tak Tahuuu',
        dateOfBirth: '2002-02-02',
        profileImage: 'https://www.mancity.com/meta/media/lutla0fg/pep-guardiola.png?width=376&quality=100',
        position: 'Official',
        joiningDate: '2002-02-02',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium beatae culpa necessitatibus ipsam dicta nam modi totam facilis ut voluptatum. Totam, nisi. Autem, beatae. Voluptatem quo repellat quaerat dolorem vitae beatae facere ex unde natus obcaecati? Reiciendis reprehenderit rem minima maiores unde provident quis molestias iure eos voluptas! Voluptas deleniti cupiditate consequuntur, voluptates repellat eos dolore. Ipsa quaerat doloremque itaque dolorum, quia sequi. Dolorum porro dignissimos velit quae molestias quibusdam perspiciatis, blanditiis aspernatur repellat soluta quas vitae aut similique nobis aliquid aperiam iure quasi beatae et obcaecati numquam provident commodi molestiae sed. Quo ullam ipsum culpa rerum, unde beatae. Accusamus?",
        achievements : []
      },
    ]
    this.TeamSubject.next(initialTeam);

    const initialSearch = "";
    this.SearchSubject.next(initialSearch);
  }

  getSearch(): Observable<string> {
    return this.SearchSubject.asObservable();
  }

  updateSearch(inputSearch: string) {
    this.SearchSubject.next(inputSearch);
  }

  getAllPlayers(): Observable<any[]> {
    return this.TeamSubject.asObservable();
  }

  getPlayer(id: string): Observable<any> {
    return this.TeamSubject.pipe(
      map(Players => {
        const foundPlayer = Players.find(Player => Player.id === id);
        return foundPlayer ? foundPlayer : "Tidak menemukan data";
      })
    );
  }

  getPlayerBasedOnPosition(position: string): Observable<any[]> {
    return this.TeamSubject.pipe(
      map(Players => Players.filter(Player => Player.position === position))
    );
  }

  getPlayerBasedOnName(name: string): Observable<any[]> {
    return this.TeamSubject.pipe(
      map(Players => Players.filter(Player => Player.name === name))
    );
  }

  addNewPlayer(NewPlayer: any) {
    let currentList = this.TeamSubject.getValue();
    currentList.push(NewPlayer);
    this.TeamSubject.next(currentList);
  }

  updatePlayer(changePlayer: any) {
    let currentPlayers = this.TeamSubject.getValue();
    const index = currentPlayers.findIndex(Player => Player.id === changePlayer.id);
    if (index !== -1) {
      currentPlayers[index] = { ...currentPlayers[index], ...changePlayer };
      this.TeamSubject.next(currentPlayers);
    } else {
      console.error('Produk tidak ditemukan.');
    }
  }

  deletePlayer(id: string) {
    let currentPlayers = this.TeamSubject.getValue();
    const index = currentPlayers.findIndex(Player => Player.id === id);
    if (index !== -1) {
      currentPlayers.splice(index, 1);
      this.TeamSubject.next(currentPlayers);
    }
  }

  generateUniqueID(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const idLength = 5;
    let generatedID = '';
  
    do {
      generatedID = '';
      for (let i = 0; i < idLength; i++) {
        generatedID += characters.charAt(Math.floor(Math.random() * characters.length));
      }
    } while (this.isIDExists(generatedID));
  
    return generatedID;
  }
  
  isIDExists(id: string): boolean {
    const currentList = this.TeamSubject.getValue();
    return currentList.some(team => team.id === id);
  }
}
