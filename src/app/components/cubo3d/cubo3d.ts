import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

@Component({
  selector: 'app-cubo3d',
  standalone: true,
  templateUrl: './cubo3d.html',
  styleUrl: './cubo3d.css'
})
export class Cubo3d implements AfterViewInit {

  @ViewChild('canvas3D') canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // 👇 SOLO crear la escena si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.createScene();
    }
  }

  private createScene() {
    const canvas = this.canvasRef.nativeElement;

    const width = canvas.clientWidth || 600;
    const height = canvas.clientHeight || 400;

    // 🔹 Escena
    const scene = new THREE.Scene();

    // 🔹 Cámara
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    camera.position.z = 3;

    // 🔹 Render
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(width, height);

    // 🔹 Cubo
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 🔹 Animación
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }
}
