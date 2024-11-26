import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: false,

  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  imagens = [
    { url: 'https://s.tmimgcdn.com/scr/800x500/52500/modelo-de-site-corporativo-responsivo-gratuito_52524-0-original.jpg', titulo: 'Blog' },
    { url: 'https://s.tmimgcdn.com/scr/800x500/52500/modelo-de-site-corporativo-responsivo-gratuito_52524-0-original.jpg', titulo: 'Loja' },
    { url: 'https://s.tmimgcdn.com/scr/800x500/52500/modelo-de-site-corporativo-responsivo-gratuito_52524-0-original.jpg', titulo: 'Portifólio' },
    { url: 'https://s.tmimgcdn.com/scr/800x500/52500/modelo-de-site-corporativo-responsivo-gratuito_52524-0-original.jpg', titulo: 'Receitas' }
  ];

}
