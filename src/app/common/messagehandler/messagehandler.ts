import { Inject,  Component } from "@angular/core";
import { ToasterToken } from "app/common/toaster/toaster.service";

@Component({ })
export class MessageHandler {

    constructor(private _toasterService: any){ }

    public showSuccess(message: string){
        this._toasterService.success(message);
    }
        
    public showError(message: string){
        this._toasterService.error(message);
    }

    public showWarning(message: string){
        this._toasterService.warning(message);
    }

}