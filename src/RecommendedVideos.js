import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";
// import { style } from "@mui/system";
function RecommendedVideos() {
  return <div className="recommendedVideos"> 
  <h2>Recommended</h2>
  <div className="recommendedVideos__videos">
    <VideoCard
    title="Become a Web Developer In 6 Months"
    views="2.4M Views"
    timestamp="1 Month ago"
    channelimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnY-HZ91bpcjkwXXWmuLi21jA9Z2qj6RUp0w&usqp=CAU"
    channel="Clever Programmer"
    image="https://i.ytimg.com/vi/XtMThy8QKqU/maxresdefault.jpg"
    />
    <VideoCard
    title="Build App With React Native"
    views="1.7M Views"
    timestamp="6 Month ago"
    channelimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnY-HZ91bpcjkwXXWmuLi21jA9Z2qj6RUp0w&usqp=CAU"
    channel="Clever Programmer"
    image="https://i.ytimg.com/vi/OojrxtudMKM/maxresdefault.jpg"
   
    />
    <VideoCard
    title="How to Master useEffect Hook"
    views="79K Views"
    timestamp="1 Week ago"
    channelimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrePPz_0Xr32HTVzu_3OhHVaKwaxJ6rWK74ruO-wPi4Bp42cCCt5JSfFLH4L-TEAatR4&usqp=CAU"
    channel="Sonny Sangha"
    image="https://i.ytimg.com/vi/UVhIMwHDS7k/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDHQzLx4Haj0-tBVWMjN8Hx8SfQjw"
    />
    <VideoCard
    title="Unboxing Gaming Laptop"
    views="879K Views"
    timestamp="2 days ago"
    channelimage="https://ytbiography.com/wp-content/uploads/Tech-Burner-Youtube-Logo.jpg"
    channel="Tech Burner"
    image="https://i.ytimg.com/vi/hvYDzd6oZiI/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBvSVh0U_qpspb7jPeMvnng6qXjNA"
    />
    <VideoCard
     title="Road to 100 Million Subs"
     views="24M Views"
     timestamp="6 days ago"
     channelimage="https://i.pinimg.com/236x/cb/e1/41/cbe141d79afb3cab682ffee5c357a858.jpg"
     channel="MrBeast"
     image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpyT36KFQ9KZP7lGPNvELbpnzHPu0icOmpA&usqp=CAU"
    />
    <VideoCard
     title="Firse Machayenge"
     views="498M Views"
     timestamp="2 Years ago"
     channelimage="https://pbs.twimg.com/media/FSFJbyWVIAELOZB?format=jpg&name=large"
     channel="Emiway Bantai"
     image="https://i.ytimg.com/vi/zaCbuB3w0kg/maxresdefault.jpg"
    />
    <VideoCard
     title="Next Js Tutorial "
     views="2.4M Views"
     timestamp="1 Year ago"
     channelimage="https://yt3.ggpht.com/ytc/AMLnZu8dZQJYCt6Ffcd-pl113huuo_HJ3PpvgkyFk5FkrQ=s900-c-k-c0x00ffffff-no-rj"
     channel="CodeWithHarry"
     image="https://i.ytimg.com/vi/DZKOunP-WLQ/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLACx0ofEZrlzO8Gx40LosoeJbyOqA"
    />
    <VideoCard
     title="Apple vs Right to Repair"
     views="6.4M Views"
     timestamp="5 Month ago"
     channelimage="https://i.ytimg.com/vi/o-_WXXVye3Y/maxresdefault.jpg"
     channel=" Marques Brownlee"
     image="https://i.ytimg.com/vi/9l3f1KrMQeo/maxresdefault.jpg"
    />
  </div>
  </div>;
}

export default RecommendedVideos;
