import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { Pages } from './pages.component';
import { SearchFilterModule } from '../filters/search-filter.module';


@NgModule({
  imports: [
    CommonModule, 
    AppTranslationModule, 
    NgaModule, 
    routing, 
    SearchFilterModule,
  ],
  declarations: [
    Pages,
  ],
})
export class PagesModule {
}
