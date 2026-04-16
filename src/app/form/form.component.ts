import { Component, effect, signal } from '@angular/core';
import { User } from './models/user';
import { form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports: [FormField],
})
export class FormComponent {
  protected user = signal<User>({
    name: '',
    email: '',
    description: '',
  });

  form = form(this.user, (schemePath) => {
    required(schemePath.name, {message: 'Name is required'});
    required(schemePath.email, {message: 'Email is required'});
    required(schemePath.description, {message: 'Description is required'});
  });

  constructor() {
    effect(() => {
      console.log(this.user());
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();    
  }
}
