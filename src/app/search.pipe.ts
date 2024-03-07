import { Pipe, PipeTransform } from "@angular/core";
import { Observable } from "rxjs";
import { TeamService } from "./shared/team.service";
import { map } from "rxjs/operators";

@Pipe({
    name: 'search'
})
export class Search implements PipeTransform {
    constructor(private _teamService: TeamService) {}

    transform(value: any[]): Observable<any[]> {
        return this._teamService.getSearch().pipe(
            map(searchTerm => {
                const searchRegex = new RegExp(searchTerm.replace(/\s+/g, '\\s+').split('').join('.*'), 'i');
                return value.filter(item => {
                    const itemName = item.name.toLowerCase();
                    return searchRegex.test(itemName);
                });
            })
        );
    }
}
