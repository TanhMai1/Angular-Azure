import { Routes } from '@angular/router';
import { WorkItemContainerComponent } from './components/work-item-container/work-item-container.component';

export const rootRouterConfig: Routes = [
    {
      path: '',
      redirectTo: '/work-items',
      pathMatch: 'full'
    },
    {
       path: 'work-items',
       component: WorkItemContainerComponent
    }
];