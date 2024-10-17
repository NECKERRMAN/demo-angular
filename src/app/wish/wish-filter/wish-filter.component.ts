import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core'
import { WishItem } from '../../../shared/models/wishItem'

const filters = [
    (item: WishItem) => item,
    (item: WishItem) => !item.isComplete,
    (item: WishItem) => item.isComplete,
]

@Component({
    selector: 'wish-filter',
    templateUrl: './wish-filter.component.html',
    styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent implements OnInit {
    @Input() filter: any
    @Output() filterChange = new EventEmitter<any>()

    ngOnInit(): void {
        this.updateFilter('0')
    }

    listFilter: any = '0'

    updateFilter(v: any) {
        this.filter = filters[v]
        this.filterChange.emit(this.filter)
    }
}
