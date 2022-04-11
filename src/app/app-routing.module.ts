import { AboutModule } from './pages/about/about.module';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', loadChildren: () =>
    import('src/app/pages/home/home.module').then(m => m.HomeModule),
},
{
  path: 'list',
  loadChildren: () =>
    import('src/app/pages/productlist/productlist.module').then(m => m.ProductlistModule),

},
{
  path: 'list/:id', loadChildren: () =>
    import('src/app/pages/productdetail/productdetail.module').then(m => m.ProductdetailModule)
},
{
  path: 'about', loadChildren: () =>
    import('src/app/pages/about/about.module').then(m => m.AboutModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
