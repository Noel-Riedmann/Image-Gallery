import { Component, OnInit } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-nggallery',
  templateUrl: './nggallery.component.html',
  styleUrls: ['./nggallery.component.css'],
  standalone: true,
  imports: [GalleryModule]
})

export class NggalleryComponent implements OnInit{
  images: GalleryItem[] = [];


  ngOnInit() {
    this.images = [
      new ImageItem({ src: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', thumb: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg', }),
      new ImageItem({ src: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', thumb: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', }),
      new ImageItem({src: 'https://wallpaperaccess.com/full/393735.jpg', thumb: 'https://wallpaperaccess.com/full/393735.jpg'}),
      new ImageItem({src: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg', thumb: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg'}),
      new ImageItem({src: 'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg', thumb: 'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg'}),
      new ImageItem({src: 'https://wallpapercave.com/wp/7OuTFOg.jpg', thumb: 'https://wallpapercave.com/wp/7OuTFOg.jpg'}),
      new ImageItem({src: 'https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=', thumb: 'https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4='})
    ];
}}
