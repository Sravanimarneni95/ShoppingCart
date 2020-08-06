import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SignupComponent } from './signup/signup.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { WomenclothingComponent } from './women/womenclothing/womenclothing.component';
import { WomenfootwearComponent } from './women/womenfootwear/womenfootwear.component';
import { WomenaccessoriesComponent } from './women/womenaccessories/womenaccessories.component';
import { MenclothingComponent } from './men/menclothing/menclothing.component';
import { MenfootwearComponent } from './men/menfootwear/menfootwear.component';
import { MenaccessoriesComponent } from './men/menaccessories/menaccessories.component';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyaccountComponent,
    SignupComponent,
    MenComponent,
    WomenComponent,
    WomenclothingComponent,
    WomenfootwearComponent,
    WomenaccessoriesComponent,
    MenclothingComponent,
    MenfootwearComponent,
    MenaccessoriesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
