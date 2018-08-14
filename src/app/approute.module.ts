import { NgModule } from "../../node_modules/@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { FilmsComponent } from "./components/films.component";
import { DetailsComponent } from "./components/details.component";

const ROUTES: Routes = [
    {path: "", component: FilmsComponent},
    {path: "films", component: FilmsComponent},
    {path: "film/:fid", component: DetailsComponent},
    {path: "**", redirectTo: "/" , pathMatch: "full"}
]

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})
export class AppRouteModule {}