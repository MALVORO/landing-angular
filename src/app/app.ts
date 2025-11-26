import { Component } from '@angular/core';
import { Cubo3d } from './components/cubo3d/cubo3d';

// Importar tus componentes reales (clases Navbar, Hero, etc.)
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Servicios } from './components/servicios/servicios';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    Servicios,
    Contacto,
    Footer,
    Cubo3d   // 👈 aquí con coma
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
