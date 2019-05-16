import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MobileComponent } from './mobile/mobile.component';


const routes: Routes = [
    {
        path: '',
        component: MobileComponent,
        data: {Title: 'The technology in your hands | Syftedesigns.com'}
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}
