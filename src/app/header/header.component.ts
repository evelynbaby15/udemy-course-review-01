import { DataStorageService } from './../shared/data-storage.service';
import { Component} from '@angular/core';
import { Response } from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    // @Output() featureSelect = new EventEmitter<string>();

    constructor(
        private dss: DataStorageService
    ) {}


    onSelect(feature: string){
        // this.featureSelect.emit(feature);
    }

    onSaveData() {
        this.dss.storeRecipes()
        .subscribe(
            (res: Response)=> {
                console.log(res);
            });
    }

    onFetchData() {
       this.dss.fetchRecipes();
    }
}
