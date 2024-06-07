import { Component } from "@angular/core";
import { pingTestServer } from "office-addin-test-helpers";
// import * as excelComponent from "./test.excel.app.component";
// import * as powerpointComponent from "./test.powerpoint.app.compontent";
// import * as wordComponent from "./test.word.app.component";

/* global Office */
const port: number = 4201;

@Component({
  selector: "app-home",
  templateUrl: "./app.component.html",
})
export default class AppComponent {
  welcomeMessage = "Welcome";
  constructor() {
    Office.onReady(async (info) => {

      console.log("TEST READY");

    });
  }
}
