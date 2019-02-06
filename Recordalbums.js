// artistName(string)
// albumName(string)
// songs (array of strings)
// currentSong (string from array)
// It should have the following methods...

// nextSong(method), which prints out its result
// previousSong(method), which prints out its result
class RecordAlbums{

    constructor(currentSong){
     this.artistName = "Rashed";
     this.albumName  = "Salamat";
     this.currentSong = currentSong;
     this.songs      = ['hala', 'ya ghali' , 'hello' , 'thank you'];
     
    }
    
    nextSong(){
    for (let i = 0 ; i <= 3 ; i++ ){
    
    if (this.currentSong === this.songs [i]){
    this.currentSong = this.songs [i+1];
    return this.currentSong
         }
    
      }
    
    }
    previousSong(){
    
    for ( let i = 0 ; i <= 3 ; i++ ) {
    
    if (this.currentSong === this.songs [i]){
    this.currentSong = this.songs [i-1];
    return this.currentSong
        }
    
      }
    
     }
    }
    