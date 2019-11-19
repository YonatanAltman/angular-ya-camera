import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  name = "Angular";
  fileName: string;
  fileToUpload: File = null;
  title = "app";
  selectedFile = null;

  fileUploadName: any;
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile); // You can use FormData upload to backend server
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.fileUploadName = this.fileToUpload.name;
  }
}
