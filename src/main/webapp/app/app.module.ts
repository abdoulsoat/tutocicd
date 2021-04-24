import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TutocicdSharedModule } from 'app/shared/shared.module';
import { TutocicdCoreModule } from 'app/core/core.module';
import { TutocicdAppRoutingModule } from './app-routing.module';
import { TutocicdHomeModule } from './home/home.module';
import { TutocicdEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TutocicdSharedModule,
    TutocicdCoreModule,
    TutocicdHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TutocicdEntityModule,
    TutocicdAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class TutocicdAppModule {}
