import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { Component, signal } from '@angular/core';

const imageUrls: string[] = [
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
  'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
];

@Component({
  selector: 'app-trending',
  imports: [GifListComponent],
  templateUrl: './trending.component.html',
})
export default class TrendingComponent {
  gifs = signal(imageUrls);
}
