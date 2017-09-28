import { Routes } from '@angular/router';

// import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { EntryListComponent } from './entry-list/entry-list.component';

export const routes: Routes = [
    { path: '', component: EntryListComponent },
    // { path: '/:id', component: PhoneDetailsComponent },
    { path: '**', redirectTo: '' }
];
