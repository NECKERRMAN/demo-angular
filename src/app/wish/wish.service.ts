import { Injectable } from '@angular/core'
import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpParams,
} from '@angular/common/http'
import { WishItem } from '../../shared/models/wishItem'
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs'
@Injectable({
    providedIn: 'root',
})
export class WishService {
    constructor(private http: HttpClient) {}

    private getStandardOptions(): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        }
    }

    getWishes() {
        let options = this.getStandardOptions()
        options.params = new HttpParams({
            fromObject: {
                format: 'json',
            },
        })
        return this.http
            .get('assets/wishes.json', options)
            .pipe(catchError(this.handleError))
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error(
                'An error occurred with the client and/or network',
                error.error
            )
        } else {
            console.error('Server-side Error: ', error.error)
        }

        return throwError(
            () => new Error('Something bad happened; please try again later.')
        )
    }

    private addWish(wish: WishItem) {
        let options = this.getStandardOptions()

        options.headers = options.headers.set('Authorization', 'val-needed')

        return this.http.post('assets/wishes.json', wish, options)
    }
}
