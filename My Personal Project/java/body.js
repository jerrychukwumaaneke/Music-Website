
//configure the paths of the images, plus corresponding target links
slideshowimages("image/IMG_20191127_155732_778.jpg","image/IMG_20190818_155825_895.jpg","image/IMG_20191127_161249_544.jpg","image/IMG_20190814_013925_195.jpg","image/IMG_20190812_103305_877.jpg")

//configure the speed of the slideshow, in miliseconds
var slideshowspeed=2000

var whichlink=0
var whichimage=0
function slideit(){
if (!document.images)
return
document.images.slide.src=slideimages[whichimage].src
whichlink=whichimage
if (whichimage<slideimages.length-1)
whichimage++
else
whichimage=0
setTimeout("slideit()",slideshowspeed)
}
slideit()

