import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'

@Component({
    selector: 'login',
    template: `
        <ActionBar title="PAPATOHU"></ActionBar>
        <GridLayout rows="auto, auto, auto" columns="*" class="login-wrap">

        <StackLayout class="logo-wrap">
          <Label text="PAPATOHU" textWrap="true" class="login-logo" row="0" col="0"></Label>
          <Label
            text="Lorem ipsum dolor set, neque adsa elmond faucabis"
            class="login-logo-sub"
            textWrap="true">
          </Label>
        </StackLayout>

        <StackLayout row="1" col="0" class="login-wrapper">
          <TextField hint="usernsame"></TextField>
          <StackLayout class="hr-light m-b-10" android:visibility="collapsed"></StackLayout>
          <TextField hint="password"  secure="true"></TextField>
          <StackLayout class="hr-light m-b-10" android:visibility="collapsed"></StackLayout>
          <StackLayout class="m-t-20">
            <Button text="Login in" class="button-primary" (tap)="onLogIn()"></Button>
          </StackLayout>
      </StackLayout>

    </GridLayout>
    `
})

export class LoginComponent implements OnInit {
    constructor(
      private routerExtensions: RouterExtensions
    ) { }

    ngOnInit() { }

    onLogIn() {
      this.routerExtensions.navigate(['input'], { clearHistory: true })
    }
}
