import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'sumadora',
    loadChildren: () => import('./sumadora/sumadora.module').then( m => m.SumadoraPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'traductor',
    loadChildren: () => import('./traductor/traductor.module').then( m => m.TraductorPageModule)
  },
  {
    path: 'tabla-de-multiplicar',
    loadChildren: () => import('./tabla-de-multiplicar/tabla-de-multiplicar.module').then( m => m.TablaDeMultiplicarPageModule)
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./experiencia/experiencia.module').then( m => m.ExperienciaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
