import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameHttpService {

  public allBooks: any;
  public allCharacters: any;
  public allHouses: any;
  public allItems: any;
  public baseUrl = 'https://www.anapioficeandfire.com/api';

  constructor(private _http: HttpClient) {
    console.log("GameHttpServive is called.")
  }

  //exception handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  public getAllBooks(): any {
    console.log("hello books");
    let myResponseOfBooks = this._http.get(this.baseUrl + '/books')
    console.log(myResponseOfBooks);
    return myResponseOfBooks;
  }// end get all books

  public getAllCharacters(): any {
    console.log("hello characters")
    let myResponseOfCharacters = this._http.get(this.baseUrl + '/characters')
    console.log(myResponseOfCharacters)
    return myResponseOfCharacters;
  }// end get all characters

  public getAllHouses(): any {
    console.log("hello houses")
    let myResponseOfHouses = this._http.get(this.baseUrl + '/houses')
    console.log(myResponseOfHouses)
    return myResponseOfHouses;
  }// end get all houses

  public getSingleBookInfo(bookId): any{
    let myResponse1 = this._http.get(this.baseUrl + '/books' + '/' + bookId)
    return myResponse1;
  }//end get single Book info

  public getSingleCharacterInfo(characterId): any{
    let myResponse2 = this._http.get(this.baseUrl + '/characters' + '/' + characterId)
    return myResponse2;
  }//end get single character info

  public getSingleHouseInfo(houseId): any{
    let myResponse3 = this._http.get(this.baseUrl + '/houses' + '/' + houseId)
    return myResponse3;
  }//end get single house info
}
