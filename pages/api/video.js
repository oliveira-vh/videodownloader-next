const fs = require('fs');
const youtubedl = require('youtube-dl');

export default async(req, res) => {
    try{
        const video = youtubedl(req.body);
        video.pipe(fs.createWriteStream('myvideo.mp4'));
    } catch(e){
        console.log(e)
    }
}