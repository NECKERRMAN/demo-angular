import { Component, Output, EventEmitter } from '@angular/core'
import { WishItem } from '../../../shared/models/wishItem'

@Component({
    selector: 'add-wish-form',
    templateUrl: './add-wish-form.component.html',
    styleUrl: './add-wish-form.component.css',
})
export class AddWishFormComponent {
    @Output() addWish = new EventEmitter<WishItem>()
    newWishText = ''
    addNewWish() {
        // Add wish to items array
        // this.items.push(new WishItem(this.newWishText))
        this.addWish.emit(new WishItem(this.newWishText))
        // Clear input field
        this.newWishText = ''
    }
}
