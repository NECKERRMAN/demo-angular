import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { WishModule } from './wish/wish.module'
import { CommonModule } from '@angular/common'
import { ContactModule } from './contact/contact.module'

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, BrowserModule, WishModule, ContactModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
