import { Component, Pipe, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from "./user/user";
import { Admin } from './admin/admin';
import { DataBinding } from "./data-binding/data-binding";
import { NgForComponent } from "./ng-for/ng-for";
import { NgIfComponent } from "./ng-if/ng-if";
import { NgClassComponent } from './ng-class/ng-class';
import { NgStyleComponent } from './ng-style/ng-style';
import { ControlStatement } from './control-statement/control-statement';
import { Signal } from "./signal/signal";
import { LinkedSignal } from './linked-signal/linked-signal';
import { TemplateForm } from './template-form/template-form';
import { PipeComponent } from './pipe/pipe';
import { GetApi } from './API/get-api/get-api';
import { PostApi } from './API/post-api/post-api';
import { PutApi } from './API/put-api/put-api';
import { DeleteApi } from './API/delete-api/delete-api';
import { ReactiveForm } from './reactive-form/reactive-form';
import { ResourceApi } from './resource-api/resource-api';
import { Customer } from './API/customer/customer';

@Component({
  selector: 'app-root',
  imports: [User, Admin, DataBinding, NgForComponent, NgIfComponent, 
    NgClassComponent, NgStyleComponent, ControlStatement, 
    RouterOutlet, RouterLink, Signal, LinkedSignal, TemplateForm,
    PipeComponent, ControlStatement, GetApi, PostApi, PutApi, DeleteApi, 
    ReactiveForm, ResourceApi, Customer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
