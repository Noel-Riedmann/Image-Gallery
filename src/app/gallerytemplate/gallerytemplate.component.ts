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
    'https://ranartblog.com/images/ogrealism.jpg', 'https://i.ytimg.com/vi/Pik6ZyAhtZs/maxresdefault.jpg', 
    'https://en.bcdn.biz/Images/2020/7/5/c38b24a6-1d06-4438-83b4-e225a092d469.jpg', 'https://d3kjluh73b9h9o.cloudfront.net/original/4X/9/3/6/936bbff0f139a090395e66d88ce9d22efd846eec.jpeg',
    'https://www.drawingskill.com/wp-content/uploads/1/Nature-Realistic-Drawing.jpg','https://121clicks.com/wp-content/uploads/2022/05/realistic_paintings_jung_hwan_19.jpg'
  ];
}
