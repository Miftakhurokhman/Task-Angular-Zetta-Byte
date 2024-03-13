import { NgModule } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
    imports: [
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatTabsModule,
        MatCardModule,
        MatMenuModule
    ],
    exports: [
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatButtonModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatTabsModule,
        MatCardModule,
        MatMenuModule
    ]
})
export class MaterialModule {}