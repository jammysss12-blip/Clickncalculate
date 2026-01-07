import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-terms-conditions',
  imports: [RouterLink, Footer],
  templateUrl: './terms-conditions.html',
  styleUrl: './terms-conditions.scss',
  standalone: true,
})
export class TermsConditions {

}
