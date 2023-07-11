import { Component } from '@angular/core';

@Component({
  selector: 'app-gallerytemplate',
  templateUrl: './gallerytemplate.component.html',
  styleUrls: ['./gallerytemplate.component.css']
})
export class GallerytemplateComponent {
  images: string[] = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfZIaFN6Keu2dJA7XDXStiJ3i5bDZ9OIbISXRH8yFwEdbZN72SjrgvX7wU_zYqyIIvYE&usqp=CAU',
    'https://t4.ftcdn.net/jpg/02/94/82/71/360_F_294827120_2LLGq6gOnc9MvpZ0ejyQH1Rzo9YkPzNH.jpg',  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKn-X2ZRRr7DWK4gEnkQFFo_NSpS4dxoS-gg&usqp=CAU',  
  ];
}
