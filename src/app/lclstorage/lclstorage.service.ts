import { Injectable } from '@angular/core';

@Injectable()
export class LclStorageService{

    private lclStorage: Storage;

    constructor() {
        this.lclStorage = localStorage;
    }
    // Clear the local storage
    clear(): void {
        this.lclStorage.clear();
    }
    // get Item from local storage
    getItem(key: string): string | null {
        return this.lclStorage.getItem(key);
    }
    // Remove item from storage
    removeItem(key: string): void {
        this.lclStorage.removeItem(key);
    }
    // Set item into storage
    setItem(key: string, data: string): void {
        this.lclStorage.setItem(key, data);
    }

}