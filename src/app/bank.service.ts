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
  private bankUrl = "https://app.fyle.in/api/bank_branches?city=";
  constructor(private http: HttpClient) {}

  getBanks(city: string): Observable<any> {
    return this.http.get(this.bankUrl + city);
  }
}
