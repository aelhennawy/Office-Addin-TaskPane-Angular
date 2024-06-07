import { Component, Inject } from "@angular/core";
import * as outlook from "./outlook.app.component";
import { LogService } from "./Log.service";

@Component({
  selector: "app-home",
  templateUrl: "./app.component.html",
})
export default class AppComponent {
  welcomeMessage = "Welcome";

  constructor(@Inject(LogService) private logMsg: LogService) {}
test(){
    this.logMsg.logThis("AHMED IS HERE")
}
  async run() {
    console.log("FDFDDFF");
    const outlookComponent = new outlook.default();
    return outlookComponent.run();
    // switch (Office.context.host) {
    //   case Office.HostType.Excel: {
    //     const excelComponent = new excel.default();
    //     return excelComponent.run();
    //   }
    //   case Office.HostType.OneNote: {
    //     const onenoteComponent = new onenote.default();
    //     return onenoteComponent.run();
    //   }
    //   case Office.HostType.Outlook: {
    //
    //   }
    //   case Office.HostType.PowerPoint: {
    //     const powerpointComponent = new powerpoint.default();
    //     return powerpointComponent.run();
    //   }
    //   case Office.HostType.Project: {
    //     const projectComponent = new project.default();
    //     return projectComponent.run();
    //   }
    //   case Office.HostType.Word: {
    //     const wordComponent = new word.default();
    //     return wordComponent.run();
    //   }
    // }
  }
}
