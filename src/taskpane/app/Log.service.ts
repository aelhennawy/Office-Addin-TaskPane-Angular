import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LogService {
  constructor() {
    console.log("LogService initialized...");
  }

  public logThis(message: string): void {
    console.log(message);
  }
}
