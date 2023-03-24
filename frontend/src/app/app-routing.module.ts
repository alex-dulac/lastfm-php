import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InterfaceLayoutComponent} from "@modules/interface-layout/interface-layout.component";

const routes: Routes = [
    {
        path: '',
        component: InterfaceLayoutComponent,
        children: [{
            path: '',
            loadChildren: () => import('@modules/interface-layout/interface-layout.module').then(m => m.InterfaceLayoutModule)
        }]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
