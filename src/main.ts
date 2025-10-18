import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CoreModule, CoreProviders } from './app/core/core.module';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    // provideHttpClient(withFetch()),
    // CoreModule,
    // CoreProviders,
  ],
}).catch((err) => console.error(err));
