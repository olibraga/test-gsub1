import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TestGsub1SharedModule } from 'app/shared/shared.module';
import { TestGsub1CoreModule } from 'app/core/core.module';
import { TestGsub1AppRoutingModule } from './app-routing.module';
import { TestGsub1HomeModule } from './home/home.module';
import { TestGsub1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TestGsub1SharedModule,
    TestGsub1CoreModule,
    TestGsub1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TestGsub1EntityModule,
    TestGsub1AppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class TestGsub1AppModule {}
