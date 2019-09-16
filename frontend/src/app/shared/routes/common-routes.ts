import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from 'src/app/layout/common-layout/common-layout.component';

export const CommonRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'user-dashboard',
    loadChildren: () => import('../../pages/user-dashboard/user-dashboard.module').then(m => m.UserDashboardPageModule)
  },
  {
    path: 'places',
    loadChildren: () => import('../../pages/places/places.module').then(m => m.PlacesPageModule)
  },
  {
    path: 'route-create',
    loadChildren: () => import('../../pages/route-create/route-create.module').then(m => m.RouteCreatePageModule)
  },
  {
    path: 'user-history',
    loadChildren: () => import('../../pages/user-history/user-history.module').then(m => m.UserHistoryPageModule)
  },
  {
    path: 'route-view',
    loadChildren: () => import('../../pages/route-view/route-view.module').then(m => m.RouteViewPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('../../pages/feedback/feedback.module').then(m => m.FeedbackPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('../../pages/faqs/faqs.module').then(m => m.FaqsPageModule)
  }
];