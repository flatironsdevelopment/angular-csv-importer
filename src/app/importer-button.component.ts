import { Component } from '@angular/core';
import FuseImporter, { AppResponse, Record } from 'fuse-importer';

async function fakeBackendValidation(records: Record[]) {
  return new Promise<AppResponse>((resolve) => {
    setTimeout(() => {
      const id = records[0]._meta?.id as string;
      resolve({
        message:
          'Most rows were imported. We found a few errors. Please fix them and re-submit',
        errors: {
          [id]: {
            customer_email: 'Email is already taken. Emails must be unique.',
          },
        },
      });
    }, 1000);
  });
}

@Component({
  selector: 'importer-button',
  template: '<button (click)="showImporter()">Show Importer</button>',
})
export class ImporterButtonComponent {
  public showImporter() {
    const organizationApiKey = 'ePdXffYSonkyTFwYBEr_iQ';
    const templateId = '6234946b-3f4e-49f5-b683-4410d4045fd7';
    const importer = new FuseImporter(organizationApiKey, templateId);

    importer.onValidateRecord = async (record: Record) => {
      const errors: any = {};
      if (
        record['customer_email'] &&
        !record['customer_email'].endsWith('@flatironsfuse.com')
      ) {
        errors['customer_email'] =
          'The email must ends with @flatironsfuse.com';
      }
      return errors;
    };

    importer.formatRecord = (record: Record) => {
      const newRecord = { ...record };

      // capitalize first letter in customer_name
      if (typeof newRecord['customer_name'] === 'string') {
        newRecord['customer_name'] =
          newRecord['customer_name'].charAt(0).toUpperCase() +
          newRecord['customer_name'].slice(1);
      }

      return newRecord;
    };

    importer.onSubmit = async (records: Record[]) => {
      return await fakeBackendValidation(records);
    };

    importer.show();
  }
}
