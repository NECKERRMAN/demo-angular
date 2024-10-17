import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FirstComponent } from './first/first.component'
import { SecondComponent } from './second/second.component'
import { WishComponent } from './wish/wish.component'
import { ContactComponent } from './contact/contact.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ProductslistComponent } from './products/productslist/productslist.component'
import { ProductdetailsComponent } from './products/productdetails/productdetails.component'

const routes: Routes = [
    /* Route order is important! */
    { path: '', component: WishComponent },
    { path: 'products', component: ProductslistComponent },
    { path: 'products/:id', component: ProductdetailsComponent },
    { path: 'wish', component: WishComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
