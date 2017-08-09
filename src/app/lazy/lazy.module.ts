import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { HeroDetailComponent } from './hero-detail.component'
import { routing } from './lazy.routing';

@NgModule({
  imports: [CommonModule,FormsModule, routing],
  declarations: [HeroDetailComponent]
})
export default class LazyModule {}