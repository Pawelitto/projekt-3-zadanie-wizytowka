import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Person } from './interfacePerson';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projekt-3-zadanie-wizytowka';
  person: Person = {
    name: 'Paweł',
    surname: 'Pietras',
    sex: true,
    adress: 'Czerwionka-Leszczyny',
    phone: '000 111 222',
    email: 'yo@email.com',
    img: 'user.png',
  };
  color = 'yellow';
  isOpen = 'block';
  changeColor() {
    this.color = this.color === 'yellow' ? 'green' : 'yellow';
    this.isOpen = this.isOpen === 'block' ? 'none' : 'block';
  }
  container = {
    display: 'flex',
    'flex-direction': 'row',
    'justify-content': 'flex-center',
    margin: '20px',
  };
  style = {
    'font-family': 'verdana',
    'background-color': '#edede9',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'flex-start',
    width: '40%',
    'min-height': '70vh',
    'row-gap': '15px',
    'border-radius': '10px',
    'margin-left': 'auto',
    'margin-right': 'auto',
  };
  tabStyle = {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'text-align': 'center',
    'background-color': '#e3d5ca',
    padding: '10px',
    'margin-top': '20px',
    'margin-botton': '20px',
  };
}
