import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);

// This is the entry point. That is, the code that launches, or "enters" the application.
// Again, the word bootstrap above here does not refer to the Bootstrap CSS framework.
// It refers to "bootstrapping", or launching, an application.
