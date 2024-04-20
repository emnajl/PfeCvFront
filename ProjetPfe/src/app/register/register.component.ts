
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  success = false;

  onSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      // Envoie des données du formulaire à votre API ou service
      console.log('Form submitted:', this.user);
      // Remplacez ce code par l'appel à votre API ou service pour enregistrer l'utilisateur
      // Exemple :
      // this.userService.registerUser(this.user).subscribe(response => {
      //   console.log('Registration successful:', response);
      //   this.success = true;
      // }, error => {
      //   console.error('Registration failed:', error);
      // });
      // Pour cet exemple, nous simulons simplement la réussite de l'enregistrement
      this.success = true;
    }
  }
}

