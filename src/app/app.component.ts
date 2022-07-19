// import { Component, OnDestroy, AfterViewInit } from '@angular/core';
// import { Uppy } from '@uppy/core';
// import GoogleDrive from '@uppy/google-drive';
// import Dashboard from '@uppy/dashboard';
// import Dropbox from '@uppy/dropbox';
// import DropTarget from '@uppy/drop-target';
// import Tus from '@uppy/tus';
// import GoldenRetriever from '@uppy/golden-retriever';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: [
//     './app.component.css',
//     '../../node_modules/@uppy/core/dist/style.css',
//     '../../node_modules/@uppy/dashboard/dist/style.css',
//   ],
// })
// export class AppComponent {
//   uppy = new Uppy({
//     id: 'uppy',
//     autoProceed: false,
//     allowMultipleUploadBatches: true,
//     debug: false,
//     restrictions: {
//       maxFileSize: 1024 * 1024,
//       minFileSize: 100,
//       allowedFileTypes: ['/image', '.jpg', '.png'],
//     },
//     meta: {
//       username: 'random',
//     },
//     onBeforeFileAdded: (currentFile, files) => {
//       console.log('its working');
//       const modifiedFile = {
//         ...currentFile,
//         name: `${currentFile.name}__${Date.now()}`,
//       };
//       return modifiedFile;
//     },
//     onBeforeUpload: (files) => {
//       console.log(files);
//       if (Object.keys(files).length < 2) {
//         // log to console
//         this.uppy.log(
//           `Aborting upload because only ${
//             Object.keys(files).length
//           } files were selected`
//         );
//         // show error message to the user
//         this.uppy.info(`You have to select at least 2 files`, 'error', 500);
//         return false;
//       }
//       return true;
//     },
//     infoTimeout: 5000,
//   })
//     // .use(Dashboard, {
//     //   id: 'Dashboard',
//     //   target: 'body',
//     //   width: 750,
//     //   height: 550,
//     // })
//     // .use(GoogleDrive, {
//     //   id: 'GoogleDrive',
//     //   title: 'Google Drive',
//     //   target: 'body',
//     //   companionUrl: 'https://companion.uppy.io/',
//     // })
//     // .use(Dropbox, {
//     //   target: 'body',
//     //   companionUrl: 'https://companion.uppy.io/',
//     // })
//     // .use(DropTarget, {
//     //   target: 'body',
//     // })
//     // .use(GoldenRetriever);
//   getinfo() {
//     console.log(this.uppy);
//   }
// }
import { Component } from '@angular/core';
import { Uppy } from '@uppy/core';
import Webcam from '@uppy/webcam';
import XHRUpload from '@uppy/xhr-upload'
import GoogleDrive from '@uppy/google-drive';
import Dropbox from '@uppy/dropbox';
import './app.component.css';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="display: flex; align-items: center; justify-content: center;">
      Uppy Demo
    </h1>
    <uppy-dashboard
      [uppy]="uppy"
      [props]="dashboardProps"
      style="display: flex; align-items: center; justify-content: center;"
    ></uppy-dashboard>
  `,
})
export class AppComponent {
  title = 'angular-example';

  dashboardProps = {
    plugins: ['Webcam', 'GoogleDrive', 'Dropbox'],
  };
  link = '';
  uppy: Uppy = new Uppy({
    id: 'uppy',
    autoProceed: false,
    allowMultipleUploadBatches: true,
    debug: false,
    restrictions: {
      maxFileSize: 1024 * 1024 * 1024,
      minFileSize: 100,
      allowedFileTypes: ['/image', '.jpg', '.png'],
    },
  })
    .use(Webcam)
    .use(GoogleDrive, { companionUrl: 'https://companion.uppy.io' })
    .use(Dropbox, {
      companionUrl: 'https://companion.uppy.io/',
    })
    .use(XHRUpload, {
      method : 'post',
      bundle : true,
      endpoint: this.link,
    });
}
