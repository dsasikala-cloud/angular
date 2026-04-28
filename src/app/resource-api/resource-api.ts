import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.css',
})
export class ResourceApi {

  userList = resource({
    loader: () => {
      return fetch("https://json-placeholder.mock.beeceptor.com/users")
      .then(res => res.json() as Promise<any[]>)
    }
  })

  onReload() {
    this.userList.reload();
  }

}
