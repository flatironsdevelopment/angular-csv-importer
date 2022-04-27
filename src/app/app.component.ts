import { Component } from '@angular/core';
import FuseImporter, { Record } from 'fuse-importer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Importer test';
  showCDNBasedImporter() {
    const apiToken = '2DXqRB8ueCyqFkQwszyIVw';
    const templateId = '180';
    const FuseImporter = (window as any).FuseImporter;
    const importer = new FuseImporter(apiToken, templateId, {
      env: 'development',
    });

    importer.onSubmit = async (reviewedData: Record[]) => {
      console.log({ reviewedData });
      return {
        errors: {},
        message: 'Data imported successfully',
      };
    };
    const onValidateRecord = async () => {
      return {};
    };
    importer.onValidateRecord = onValidateRecord;

    importer.show();
  }
  showImporter() {
    const apiToken = '2DXqRB8ueCyqFkQwszyIVw';
    const templateId = '180';
    const importer = new FuseImporter(apiToken, templateId, {
      env: 'development',
    });

    importer.onSubmit = async (reviewedData: Record[]) => {
      console.log({ reviewedData });
      return {
        errors: {},
        message: 'Data imported successfully',
      };
    };
    const onValidateRecord = async () => {
      return {};
    };
    importer.onValidateRecord = onValidateRecord;

    importer.show();
  }
}
