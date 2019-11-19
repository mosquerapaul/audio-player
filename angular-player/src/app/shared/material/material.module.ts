import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatButtonModule,
  MatTableModule, MatPaginatorModule , MatSortModule, MatTabsModule, MatCheckboxModule, MatToolbarModule,
  MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule,
  MatSidenavModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule,
    MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule,
    MatDialogModule, MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatTableModule,
    MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule,
    MatProgressSpinnerModule, MatInputModule, MatPaginatorModule, MatListModule, MatGridListModule,
    MatProgressBarModule, MatSidenavModule],

  exports: [MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatRadioModule,
    MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule,
    MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatCheckboxModule, MatToolbarModule,
    MatCardModule, MatTableModule, MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule,
    MatInputModule, MatPaginatorModule, MatListModule, MatGridListModule,
    MatProgressBarModule, MatSidenavModule ]
})
export class MaterialModule { }
