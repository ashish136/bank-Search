import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable({
  providedIn: "root"
})
export class BankService {
  city : string;
  offset:number;
  limit : string;
  private bankUrl:string;
  constructor(private http: HttpClient) {}

  getBanks(city: string): Observable<any> {
    this.city=city;
  this.bankUrl = `https://app.fyle.in/api/bank_branches?city=${this.city}&offset=${this.offset}&limit=50`;
    return this.http.get(this.bankUrl);
  }
}
