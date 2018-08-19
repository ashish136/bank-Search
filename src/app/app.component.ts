import { Component } from "@angular/core";
import { BankService } from "./bank.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "bankSearch";
  banks: any;
  banksDuplicate: any;
  city: Array<string>;
  currentCity: string;
  bankSearch: string;
  regex: RegExp;
  constructor(private bankService: BankService) {
    this.city = ["BANGALORE", "LUCKNOW", "MUMBAI", "KANPUR", "DELHI"];
    bankService.offset=0;
  }
  ngOnInit() {
    this.getBanks("BANGALORE");
  }
  search(): void {
    this.regex = new RegExp(this.bankSearch, "i");
    this.banks = this.banksDuplicate.filter(bank => {
      return (bank.bank_name.search(this.regex) != -1 ||bank.branch.search(this.regex) != -1 ||bank.ifsc.search(this.regex) != -1 ||bank.city.search(this.regex) != -1 ||bank.district.search(this.regex) != -1 ||bank.address.search(this.regex) != -1 ||bank.state.search(this.regex) != -1 || bank.bank_id.toString().search(this.regex) != -1 );
    });
  }
  fetchData(city: string): void {
    this.bankSearch = "";
    this.bankService.offset=0;
    this.getBanks(city);
  }
  getBanks(city: string): void {
    this.bankService.getBanks(city).subscribe(allBank => {
      this.banks = allBank;
      this.banksDuplicate = allBank;
      this.currentCity = city;
      console.log(this.banks);
    });
  }
  nextPrevBanks(op : number):void {
    if(op==0){
      this.bankService.offset=this.bankService.offset-50;
      this.getBanks( this.currentCity);
    }
    else if(op==1){
      this.bankService.offset=this.bankService.offset+50;
      this.getBanks( this.currentCity);
    }
  }
}
