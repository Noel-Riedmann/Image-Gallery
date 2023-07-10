import { Component } from '@angular/core';
import { ImageModel } from './models';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: ImageModel[] = [
    { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfZIaFN6Keu2dJA7XDXStiJ3i5bDZ9OIbISXRH8yFwEdbZN72SjrgvX7wU_zYqyIIvYE&usqp=CAU', title: 'Bild 1' },
    { url: 'https://t4.ftcdn.net/jpg/02/94/82/71/360_F_294827120_2LLGq6gOnc9MvpZ0ejyQH1Rzo9YkPzNH.jpg', title: 'Bild 2' },
    { url: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg', title: 'Bild 3' },
    { url: 'https://media.istockphoto.com/id/1029523462/de/foto/vollbildaufnahme-der-sukkulentenpflanze.jpg?s=612x612&w=0&k=20&c=4B_ApmngV39AqqBQpXZYbTTu3PvrFmhqhuF7g0QJTHQ=', title: 'Bild 4' },
    { url: 'https://media.istockphoto.com/id/1464366330/de/foto/gruppe-von-windkraftanlagen-bei-sonnenaufgang.jpg?s=612x612&w=0&k=20&c=hSmI_ri-Qrt0XoXPicLpTCbT382wx8Up7HRwsha0XUM=', title: 'Bild 5' },
    { url: 'https://media.istockphoto.com/id/1058434110/de/foto/nahaufnahme-der-abstrakten-vor-farbigem-hintergrund.jpg?s=612x612&w=0&k=20&c=IIkS51BR8W28cbmeTSjRpgVfiuAsBlZZCHARPBIbtSM=', title: 'Bild 6' },
    { url: 'https://media.istockphoto.com/id/1481468103/de/foto/windturbinen-auf-das-meer.jpg?s=612x612&w=0&k=20&c=Gd73GeaYwHwA_pU-PSeIXwY49v95lz7JhlYqjV5bem8=', title: 'Bild 7' },
    { url: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Bild 8' },
    { url: 'https://media.istockphoto.com/id/483724081/photo/yosemite-valley-landscape-and-river-california.jpg?s=612x612&w=0&k=20&c=QQ7rvq0Qbfpkug1Wbd36PGqkOntoPFKWxiE4w4tV-NE=', title: 'Bild 9' },
    { url: 'https://t4.ftcdn.net/jpg/02/94/82/71/360_F_294827120_2LLGq6gOnc9MvpZ0ejyQH1Rzo9YkPzNH.jpg', title: 'Bild 10' },
    { url: 'https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_1280.jpg', title: 'Bild 11' },
    { url: 'https://thumbs.dreamstime.com/b/nature-forest-trees-growing-to-upward-to-sun-wallpaper-42907586.jpg', title: 'Bild 12' },
    { url: 'https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_1280.jpg', title: 'Bild 13' },
    { url: 'https://st.depositphotos.com/1033604/2008/i/600/depositphotos_20087151-stock-photo-beautiful-lake-with-mountains-in.jpg', title: 'Bild 14' },
    { url: 'https://t4.ftcdn.net/jpg/01/31/55/69/360_F_131556918_yBx0ms1saqWLuaVm1wNX2OP0lXZvBrVz.jpg', title: 'Bild 15' },
    { url: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', title: 'Bild 16' },
  ];
  enlargedImage?: ImageModel;
  currentIndex: number = 0;
  playInterval: any;
  isPlaying: boolean = false;

  enlargeImage(image: ImageModel) {
    this.enlargedImage = image;
  }

  closeEnlargedView() {
    this.isPlaying = false;
    clearInterval(this.playInterval);
    this.enlargedImage = undefined;
  }

  forward() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.enlargedImage = this.images[this.currentIndex];
  }

  back() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.enlargedImage = this.images[this.currentIndex];
  }

  play() {
    if(!this.isPlaying){
      this.isPlaying = true;
      this.playInterval = setInterval(() => {
        this.forward();
      }, 1000);
    }
    else{
      alert("already playing")
    }
    
  }

  pause() {
    this.isPlaying = false;
    clearInterval(this.playInterval);
  }
}