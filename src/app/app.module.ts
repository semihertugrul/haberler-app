import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HaberserviceService } from './haberservice.service';
import { AppRoutingModule } from './app-routing.module';
import { HaberComponent } from './haber/haber.component';
import { HaberDetayComponent } from './haber-detay/haber-detay.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HaberComponent,
    HaberDetayComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HaberserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
