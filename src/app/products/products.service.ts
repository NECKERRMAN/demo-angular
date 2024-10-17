import { Injectable } from '@angular/core'
import { of } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private data: any[] = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ]
    constructor() {}

    getAllProducts() {
        return of(this.data)
    }

    getProduct(id: number) {
        return of(this.data.find((p) => p.id === id))
    }
}
