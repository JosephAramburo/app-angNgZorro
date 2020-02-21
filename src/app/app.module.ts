import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US, es_ES } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import es from '@angular/common/locales/es';

//Components
import { ModalQuestionComponent } from '@components/modals/modal-question/modal-question.component';

//Library
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgxSpinnerModule } from "ngx-spinner";

import { LoginComponent } from '@pages/login/login.component';
import { HomeComponent } from '@pages/home/home.component';
import { InitComponent } from '@pages/init/init.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent, 
    InitComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LocalStorageModule.forRoot({
      prefix      : 'ang9',
      storageType : 'localStorage'
    }),
    NgxSpinnerModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents:[
    ModalQuestionComponent
  ]
})
export class AppModule { }
