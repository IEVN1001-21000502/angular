import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoListComponent } from './product/producto-list/producto-list.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { EjemploComponent } from './formularios/ejemplo/ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    ProductoFilterPipe,
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
