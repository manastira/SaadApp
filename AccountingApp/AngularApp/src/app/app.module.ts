import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
//import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeMainComponent } from './Pages/home-main/home-main.component';
import { MenuComponent } from './Pages/Menu/menu/menu.component';
import { Menu2Component } from './Pages/Menu/menu2/menu2.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './Pages/navigation/header/header.component';
import { WelcomePageComponent } from './Pages/welcome-page/welcome-page.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { LoginComponent } from './Pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeTableComponent } from './Pages/home-table/home-table.component';
import { AddDialogComponent } from './Dialogs/add-dialog/add-dialog.component';
import { DeleteDialogComponent } from './Dialogs/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './Dialogs/edit-dialog/edit-dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { TestTableComponent } from './Pages/test-table/test-table.component';
import { DetailsComponent } from './Pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    MenuComponent,
    Menu2Component,
    HeaderComponent,
    WelcomePageComponent,
    ProfileComponent,
    RegistrationComponent,
    LoginComponent,
    HomeTableComponent,
    AddDialogComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    TestTableComponent,
    DetailsComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    //MatChipsModule ,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    HttpClientModule

  ],
  exports: [
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    //MatChipsModule ,
    MatExpansionModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    HttpClientModule,
    DetailsComponent,
    TestTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
