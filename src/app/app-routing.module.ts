import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full'
  },
  {
    path: 'task',
    component: CommonLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./module/task/task.module').then(m =>
          m.TaskModule
        )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'hridoyahmed'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
