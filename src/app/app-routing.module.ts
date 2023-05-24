import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ListarComponent } from './pages/listar/listar.component';
import { CrearComponent } from './pages/crear/crear.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

const routes: Routes = [
  {path: "pages/listar", component: ListarComponent},
  {path: "pages/crear", component: CrearComponent},
  {path: "pages/acerca", component: AcercaComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export class TabGroupDynamicExample {
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}