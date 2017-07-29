import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NativeScriptModule } from 'nativescript-angular/nativescript.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { SharedModule } from './modules/shared/shared.module'
import { LoginComponent } from './components/login/login.component'
import { InputComponent } from './components/input/input.component'

@NgModule({
  imports: [
    NativeScriptModule,
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,

    LoginComponent,
    InputComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
