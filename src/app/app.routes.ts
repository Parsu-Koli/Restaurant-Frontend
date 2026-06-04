import { Routes } from '@angular/router';

import { Dashboard } from './Component/dashboard/dashboard';
import { GetAll } from './Component/menu/get-all/get-all';
import { Create } from './Component/menu/create/create';
import { GetById } from './Component/menu/get-by-id/get-by-id';
import { Update } from './Component/menu/update/update';

import { GetAllCategory } from './Component/Category/get-all-category/get-all-category';
import { CategoryDetails } from './Component/Category/category-details/category-details';
import { CreateCategory } from './Component/Category/create-category/create-category';

import { GetTables } from './Component/Tables/get-tables/get-tables';
import { AddTable } from './Component/Tables/add-table/add-table';
import { GetOrderByTableID } from './Component/Tables/get-order-by-table-id/get-order-by-table-id';

import { Order } from './Component/Order/order/order';
import { CreateOrder } from './Component/Order/create-order/create-order';
import { GetOrderById } from './Component/Order/get-order-by-id/get-order-by-id';
import { UpdateOrder } from './Component/Order/update-order/update-order';

import { GetAllReservation } from './Component/Reservation/get-all-reservation/get-all-reservation';
import { CreateReservation } from './Component/Reservation/create-reservation/create-reservation';

import { Customer } from './Component/Customer/customer/customer';
import { Login } from './Component/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  /* PUBLIC ROUTE */
  { path: 'login', component: Login },
   { path: '', redirectTo: 'login', pathMatch: 'full' },

  /* PROTECTED ROUTES */
  {
    path: '',
    canActivate: [authGuard],
    children: [

      { path: 'dashboard', component: Dashboard },

      /* MENU */
      { path: 'menu', component: GetAll },
      { path: 'create-menu', component: Create },
      { path: 'menu/:id', component: GetById },
      { path: 'update-menu/:id', component: Update },

      /* CATEGORY */
      { path: 'category', component: GetAllCategory },
      { path: 'category/:id', component: CategoryDetails },
      { path: 'create-category', component: CreateCategory },

      /* TABLES */
      { path: 'tables', component: GetTables },
      { path: 'add-table', component: AddTable },
      { path: 'getOrderbytable/:id', component: GetOrderByTableID },

      /* ORDERS */
      { path: 'orders', component: Order },
      { path: 'create-order', component: CreateOrder },
      { path: 'get-order-by-id/:id', component: GetOrderById },
      { path: 'update-order/:id', component: UpdateOrder },

      /* RESERVATIONS */
      { path: 'reservations', component: GetAllReservation },
      { path: 'create-reservation', component: CreateReservation },

      /* CUSTOMERS */
      { path: 'customers', component: Customer }

    ]
  },

  /* FALLBACK */
  { path: '**', redirectTo: 'login' }

];