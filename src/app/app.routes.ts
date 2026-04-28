import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { NgClassComponent } from './ng-class/ng-class';
import { NgStyleComponent } from './ng-style/ng-style';
import { ControlStatement } from './control-statement/control-statement';
import { GetApi } from './API/get-api/get-api';
import { PostApi } from './API/post-api/post-api';
import { PutApi } from './API/put-api/put-api';
import { DeleteApi } from './API/delete-api/delete-api';
import { ResourceApi } from './resource-api/resource-api';
import { Customer } from './API/customer/customer';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'user',
        component: User
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'ng-class',
        component: NgClassComponent
    },
    {
        path: 'ng-style',
        component: NgStyleComponent
    }, 
    {
        path: 'control-statement',
        component: ControlStatement
    },
    {
        path: 'get-api',
        component: GetApi
    },
    {
        path: 'post-api',
        component: PostApi
    },
    { 
        path: 'put-api',
        component: PutApi
    }, 
    { 
        path: 'delete-api',
        component: DeleteApi
    },
    {
        path: 'resource-api',
        component: ResourceApi
    },
    {
        path: "customer",
        component: Customer
    }
];
