import { Component } from '@angular/core';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrl: './list-images.component.css'
})
export class ListImagesComponent {
  listImages = [
    {
      image_url : "https://images.unsplash.com/photo-1541110729715-84eeda8be2be?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwdmlld3xlbnwwfHwwfHx8MA%3D%3D",
      image_title : "Lorem",
      owner_photo : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
      owner : "Alfonso",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magnam commodi omnis ad doloribus autem labore amet unde, deleniti, explicabo, qui iste impedit fugiat obcaecati voluptatum. Illum, earum quibusdam. Quas temporibus, nesciunt id dolore possimus ipsum fugiat placeat esse qui."
    },
    {
      image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlRW5t89wHTyzXBPrIZikgcrPytE3aFFJQQo_VsPbCQ4zvfaIZQO922c6vug&s",
      image_title : "ipsum",
      owner_photo : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
      owner : "Alfonso",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magnam commodi omnis ad doloribus autem labore amet unde, deleniti, explicabo, qui iste impedit fugiat obcaecati voluptatum. Illum, earum quibusdam. Quas temporibus, nesciunt id dolore possimus ipsum fugiat placeat esse qui."
    },
    {
      image_url : "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/7-a-beautiful-landscape-view-at-kashmir-india-sudip-jotshi.jpg",
      image_title : "field",
      owner_photo : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
      owner : "Fernando",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magnam commodi omnis ad doloribus autem labore amet unde, deleniti, explicabo, qui iste impedit fugiat obcaecati voluptatum. Illum, earum quibusdam. Quas temporibus, nesciunt id dolore possimus ipsum fugiat placeat esse qui."
    },
    {
      image_url : "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2018-07-11-at-5-06-55-pm-1531343396.png",
      image_title : "lake",
      owner_photo : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
      owner : "Davies",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magnam commodi omnis ad doloribus autem labore amet unde, deleniti, explicabo, qui iste impedit fugiat obcaecati voluptatum. Illum, earum quibusdam. Quas temporibus, nesciunt id dolore possimus ipsum fugiat placeat esse qui."
    },
    {
      image_url : "https://media.istockphoto.com/id/1453838542/photo/last-light-on-mount-sneffels.jpg?b=1&s=612x612&w=0&k=20&c=ZgxNhzAuxA5hOS8jGZ_SmBKNc-QxJw5WGW62up-PRZk=",
      image_title : "mount",
      owner_photo : "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg",
      owner : "Davies",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magnam commodi omnis ad doloribus autem labore amet unde, deleniti, explicabo, qui iste impedit fugiat obcaecati voluptatum. Illum, earum quibusdam. Quas temporibus, nesciunt id dolore possimus ipsum fugiat placeat esse qui."
    },
  ]
}
