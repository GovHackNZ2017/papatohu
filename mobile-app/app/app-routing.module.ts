import { NgModule } from '@angular/core'
import { NativeScriptRouterModule } from 'nativescript-angular/router'
import { LoginComponent } from './components/login/login.component'
import { InputComponent } from './components/input/input.component'

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'input', component: InputComponent }
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
