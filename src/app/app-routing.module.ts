import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "usuarios",
        loadChildren: () => import("./item/item-listar/item-listar.module").then((modulo) => modulo.ItemListarModule),
    },
    {
        path: "usuarios/cadastrar",
        loadChildren: () =>
            import("./item/item-cadastrar-editar/item-cadastrar-editar.module").then(
                (modulo) => modulo.ItemCadastrarEditarModule
            ),
    },
    {
        path: "usuarios/editar/:id",
        loadChildren: () =>
            import("./item/item-cadastrar-editar/item-cadastrar-editar.module").then(
                (modulo) => modulo.ItemCadastrarEditarModule
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
