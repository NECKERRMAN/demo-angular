import { Component } from '@angular/core'
import { WishItem } from '../../shared/models/wishItem'
import { EventService } from '../../shared/services/EventService'
import { WishService } from './wish.service'

@Component({
    selector: 'app-wish',
    templateUrl: './wish.component.html',
    styleUrl: './wish.component.css',
})
export class WishComponent {
    items: WishItem[] = [new WishItem('Fallback wish!')]

    constructor(events: EventService, private wishService: WishService) {
        events.listen('removeWish', (wish: WishItem) => {
            this.items.splice(this.items.indexOf(wish), 1)
        })
    }

    ngOnInit(): void {
        this.wishService.getWishes().subscribe(
            (data: any) => {
                this.items = data
            },
            (error: any) => {
                alert(error.message)
            }
        )
    }

    filter: any

    /* get visibleItems(): WishItem[] {
      return this.items.filter(this.filter)
  } */
}
