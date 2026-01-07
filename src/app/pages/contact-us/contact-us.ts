import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-contact-us',
  imports: [RouterLink, Footer],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
  standalone: true,
})
export class ContactUs {

}
