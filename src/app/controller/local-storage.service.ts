import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;
  constructor() { 
    this.storage = window.localStorage;
  }

  set(key: string, value: string) {
   // this.storage.setItem(key, value);
   if (this.storage) {
    this.storage.setItem(key, JSON.stringify(value));
    console.log('saved object');
    return true;
  }
  return false;
  }

  get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key));
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }


}
