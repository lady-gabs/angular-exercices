import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

export const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'list/:id', component: ItemDetailComponent}
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)], //pq não pode ser "RouterModule.forRoot(routes)"
    exports: [RouterModule],
})
export class RoutesModule{
    
}

