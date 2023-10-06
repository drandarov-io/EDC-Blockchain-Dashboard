import { Component, Inject, OnInit } from '@angular/core';
import { AssetInput } from "@think-it-labs/edc-connector-client";
import { MatDialogRef } from "@angular/material/dialog";
import { StorageType } from "../../models/storage-type";


@Component({
  selector: 'edc-demo-asset-editor-dialog',
  templateUrl: './asset-editor-dialog.component.html',
  styleUrls: ['./asset-editor-dialog.component.scss']
})
export class AssetEditorDialog implements OnInit {

  id: string = '';
  version: string = '';
  name: string = '';
  contenttype: string = '';

  storageTypeId: string = 'HttpData';
  account: string = '';
  container: string = 'src-container';
  blobname: string = '';

  originator: string = 'http://localhost:8184/protocol';
  baseUrl: string = "http://techslides.com/demos/samples/sample.txt";


  constructor(private dialogRef: MatDialogRef<AssetEditorDialog>,
      @Inject('STORAGE_TYPES') public storageTypes: StorageType[]) {
  }

  ngOnInit(): void {
  }

  onSave() {
    const assetInput: AssetInput = {
      "@id": this.id,
      properties: {
        "name": this.name,
        "version": this.version,
        "contenttype": this.contenttype,
        "originator": this.originator,
      },
      dataAddress: {
        "type": this.storageTypeId,
        "name": this.id,
        "baseUrl": this.baseUrl,
        //"account": this.account,
        //"container": this.container,
        //"blobname": this.blobname,
        //"keyName": `${this.account}-key1`
      }
    };

    this.dialogRef.close({ assetInput });
  }
}
