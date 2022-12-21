import { Injectable } from "@angular/core";



@Injectable({ providedIn: 'root' })

export class StorageService {


    public setItem(key: any, data: any, forgot?: boolean) {
        data = data || null;
        const storage = forgot ? sessionStorage : localStorage;
        storage.setItem(key, JSON.stringify(data));
    }

    public getItem(key: any, forgot?: boolean) {
        const storage = forgot ? sessionStorage : localStorage;
        let data: any = storage.getItem(key)
        return JSON.parse(data)
    }

    public removeItem(key: any, forgot?: boolean) {
        const storage = forgot ? sessionStorage : localStorage;
        let data = storage.removeItem(key)
    }

    public getUserId() {
        return this.getItem('user', false)
    }

    public getRole() {
        return this.getItem('roles', false)
    }

}