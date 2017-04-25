# ngx-konami

A simple directive to add easter eggs in your Angular 2+ application.

## Installation

To install this library, run:

```bash
$ npm install ngx-konami --save
```

## Getting started

Once you have published your library to npm, you can import your library in any Angular application :

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { KonamiModule } from 'ngx-konami';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify KonamiModule as an import
    KonamiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its directive in your Angular application :

```xml
<!-- You can now use the konami directive in app.component.html -->
<div (konami)="sayHello()"></div>
```

The method ```sayHello``` will be called when you type the konami code !

## Contribute

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Laurent THIEBAULT](mailto:thiebault.laurent@gmail.com)
