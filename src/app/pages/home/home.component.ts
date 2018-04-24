import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {GuestService} from "../../services/guest.service";
import {iGuest} from "../../models/iguest.interface";
import {SimpleDialogComponent} from "../../commons/simple-dialog/simple-dialog.component";
import {PubSubService} from "../../services/pub-sub.service";
import {IUser, UserService} from "../../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  guests: iGuest[];
  guestsObs = this.guestService.index().do(console.log);
  user: IUser;


  //fakeGuest = this.guestService.index();

  title = 'Guest';
  info = {
    nome: 'tiziano',
    birthdate: new Date('05/06/1983'),
  };

  constructor(private readonly guestService: GuestService,
              private dialog: MatDialog,
              private pubSub: PubSubService,
              private userService: UserService) {
    const hi = 'HI';
    this.userService.getUser$().subscribe(
      (r) => {
        this.user = r;
        this.title = `${hi} ${r.name}`;
      })

    this.printlet();
    this.destruct();
    this.arrow()();


    this.getGuests();
    this.pubSub.subscribe('refresh', () => {
      console.log('====>reload');
      this.getGuests(true);
    });

  }

  printlet() {
    let test = 'test';
    if (true) {
      test = 'test2';
    }
    console.log('let', test);
    return test;
  }

  /**
   * crea una copia dell'oggetto per valore senza passare il riferimento
   */
  destruct() {
    const info2 = {...this.info, nome: 'homer'};
    info2.nome = 'homer';
    console.log('info', this.info);
    console.log('info2', info2);
  }

  arrow() {
    return () => {
      console.log('arrow');
    };
  }

  promise() {
    return new Promise((resolved, reject) => {
      setTimeout(() => {
        resolved();
      }, 5000)
    })
  }

  onAddGuestListener(args: string) {
    this.openDialog();
    /*
        //alert(`add guest ${args}`);
        const guest: iGuest = {
          //  id : this.fakeGuest.length+1,
          firtsName: args,
          lastName: args,
          birthDate: new Date().toString(),
          //  this.fakeGuest = this.guestService.post(guest);

      }

       this.guestService.post(guest).subscribe((res)=> {this.guests = res});

       */
  }

  onDeleteGuestListener(args: string) {
    this.guestService.deleteById(args).subscribe((res) => {
      this.guests = res
    });
    // this.fakeGuest = this.guestService.deleteById(args);
  }

  /**
   * il metodo di delete è stato estremizzato per scopi didattici
   * si risale tramite gli emitter dal componente del bottone fino all'app component
   * in modo che l'unico ad utilizzare il servizio è l'app component
   */




  openDialog(): void {
    let dialogRef = this.dialog.open(SimpleDialogComponent, {
      width: '70%',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe((result: iGuest) => {

      console.log('The dialog was closed');
      if (result)
        this.guestService.post(result).subscribe((res) => {
          this.guests = res
        });
      //this.animal = result;
    });
  }

  getGuests(reload = false) {
    this.guestService.index(reload).subscribe((res) => {
      //console.log("Sono la risposta di guest dal server: ", res);
      this.guests = res;
    })
  }

}
