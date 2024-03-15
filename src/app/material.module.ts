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
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule} from '@angular/material/dialog'
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
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatRadioModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatDialogModule
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
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatRadioModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatDialogModule
    ]
})
export class MaterialModule {}