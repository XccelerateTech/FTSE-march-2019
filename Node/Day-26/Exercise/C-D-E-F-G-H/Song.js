//C E
class Song{
    constructor(name, album, author){
    this.name = name;
    this.album = album;
    this.author = author;
    }

    getDescription(){
        return `The name of this song is ${this.name} and it is from the album ${this.album}. It was written by ${this.author}.`
    }

    isInTheSameAlbumAs(otherSong){
        //return (otherSong.album === this.album)? true: false;

        if (otherSong.album === this.album){
            return true;
        } else {
            return false;
        }
    }

    persistFavoriteStatus(){
        return true
        //throw new Error("Not Yet Implemented. ")
    };
}

module.exports = Song;