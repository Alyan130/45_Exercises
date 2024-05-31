function make_album(artist_name:String,album_title:String,no_of_track?:number){
 let music_album={
    artistName:artist_name,
    albumTitle:album_title,
    noOfTrack:no_of_track,
}
return music_album;
}

console.log(make_album("Michael Jackson","Thriller",8));
console.log(make_album("Pink floyd","The dark side of the moon"));
console.log(make_album("The Beatles","Abbey road"));