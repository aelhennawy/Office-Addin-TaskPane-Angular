import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";
import { LogService } from "./Log.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export default class AppModule {}
