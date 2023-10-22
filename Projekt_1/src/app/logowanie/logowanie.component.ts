import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent implements OnInit {
	formData = {
		username: '',
		password: ''
	}
	
	constructor() {}
	
	ngOnInit(): void {}
	
	logowanie() {
		if (this.formData.username === 'przykładowy_użytkownik' && this.formData.password === 'przykładowe_hasło') {
			console.log('Zalogowano pomyślnie!');
		} else {
			console.log('Błąd logowania. Sprawdź dane!');
		}
	}
}
