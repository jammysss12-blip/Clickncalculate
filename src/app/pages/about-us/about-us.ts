import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink, Footer],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
  standalone: true,
})
export class AboutUs {

}
