import { Component, OnInit, NgZone, ChangeDetectionStrategy, ViewChild } from '@angular/core'
import { IPerson } from '../../interfaces/IPerson'
import * as camera from 'nativescript-camera'
import * as imageModule from 'ui/image'

@Component({
  selector: 'input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ActionBar title="PAPATOHU"></ActionBar>
    <side-drawer-page>
      <ScrollView>

        <StackLayout class="p-15">
          <StackLayout margin="0" padding="5" class="login-wrapper">
            <Label text="Current Location" class="t-14" textWrap="true"></Label>
            <TextField hint="Christchurch" class="t-14"></TextField>
            <StackLayout class="hr-light m-b-10" android:visibility="collapsed"></StackLayout>
          </StackLayout>

          <StackLayout>
            <GridLayout *ngFor="let person of people; let i = index" height="90" columns="*, *, 50">

              <StackLayout col="0" margin="0" padding="5" class="login-wrapper">
                <Label text="Gender" class="t-14" textWrap="true"></Label>
                <StackLayout orientation="horizontal">
                  <Button
                    padding="0"
                    text="M"
                    class="m-r-10 m-t-10 button-small"
                    [ngClass]="{'button-secondary': person.gender === 'm', 'button-grey': person.gender !== 'm'}"
                    (tap)="onSelectGender(i, 'm')"
                  >
                  </Button>
                  <Button
                    padding="0"
                    text="F"
                    class="m-t-10 button-small"
                    [ngClass]="{'button-secondary': person.gender === 'f', 'button-grey': person.gender !== 'f'}"
                    (tap)="onSelectGender(i, 'f')"
                  >
                  </Button>
                </StackLayout>
              </StackLayout>

              <StackLayout col="1" margin="0" padding="5" class="login-wrapper">
                <Label text="Age" class="t-14 m-b-5" textWrap="true"></Label>
                <TextField margin="0" class="t-14" [text]="person.age" keyboardType="number"></TextField>
                <StackLayout class="hr-light m-b-10" android:visibility="collapsed"></StackLayout>
              </StackLayout>

              <StackLayout orientation="horizontal" marginTop="20" col="2">
                <Button
                  *ngIf="i !== 0"
                  padding="0"
                  class="button-danger button-small t-25"
                  text="-"
                  (tap)="onDeletePerson(i)"
                >
                </Button>
              </StackLayout>
            </GridLayout>
          </StackLayout>

          <StackLayout>
            <Button
                marginLeft="90"
                marginRight="90"
                marginTop="15"
                padding="0"
                class="button-primary t-25"
                text="+"
                (tap)="onAddPerson()"
              >
              </Button>
          </StackLayout>

          <StackLayout>
            <Button
                marginLeft="90"
                marginRight="90"
                marginTop="15"
                padding="0"
                class="button-primary t-25"
                text="Take Picture"
                (tap)="onTakePhoto()"
              >
              </Button>
          </StackLayout>

          <Image *ngIf="!imgSrc === ''" width="500" height="500" [src]="imgSrc"></Image>

        </StackLayout>
      </ScrollView>
    </side-drawer-page>
  `
})

export class InputComponent implements OnInit {
  people: IPerson[]
  defaultPerson: IPerson = {
    age: 20,
    gender: 'm'
  }

  imgSrc: any = ''

  constructor(
    private zone: NgZone
  ) {
    this.people = [this.defaultPerson]
  }

  ngOnInit() {
    camera.requestPermissions()
  }

  onSelectGender(i: number, gender: string) {
    this.people[i].gender = gender
  }

  onAddPerson() {
    this.people = this.people.concat([JSON.parse(JSON.stringify(this.defaultPerson))])
  }

  onDeletePerson(i: number) {
    this.people = this.people.filter((_, idx) => idx !== i)
  }

  onTakePhoto() {
    const options = { width: 300, height: 300, keepAspectRatio: false, saveToGallery: true }
    this.zone.run(() => {
      camera.takePicture(options)
        .then((imageAsset) => {
          this.imgSrc = imageAsset
          console.log(this.imgSrc)
        }).catch((err) => {
            console.log('Error -> ' + err.message)
        })
    })
  }
}
