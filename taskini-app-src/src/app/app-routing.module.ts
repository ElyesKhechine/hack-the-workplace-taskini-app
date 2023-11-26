import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
const routes: Routes = [{
        path: '',
        redirectTo: 'alltasks',
        pathMatch: 'full'
    },
    {
        path: 'settings',
        loadChildren: () =>
            import ('./Settings/Settings.module').then(m => m.SettingsPageModule),
    },
    {
        path: 'alltasks',
        loadChildren: () =>
            import ('./AllTasks/AllTasks.module').then(m => m.AllTasksPageModule),
    },
    {
        path: 'orderby',
        loadChildren: () =>
            import ('./OrderBy/OrderBy.module').then(m => m.OrderByPageModule),
    },
    {
        path: 'modifytask',
        loadChildren: () =>
            import ('./ModifyTask/ModifyTask.module').then(m => m.ModifyTaskPageModule),
    },
    {
        path: 'notif',
        loadChildren: () =>
            import ('./Notif/Notif.module').then(m => m.NotifPageModule),
    },
    {
        path: 'profileconfig',
        loadChildren: () =>
            import ('./ProfileConfig/ProfileConfig.module').then(m => m.ProfileConfigPageModule),
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}