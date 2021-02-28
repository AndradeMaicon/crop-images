export default function(Photo) {
  Photo.load = () => {
    Photo.photoFile = document.getElementById('photo-file')
  
    Photo.photoFile.addEventListener('change', () => {
      let file = Photo.photoFile.files.item(0)
      Photo.photoName = file.name

      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = onLoadReader

    })
    
    function onLoadReader(event) {
      Photo.image = new Image()
      Photo.image.src = event.target.result
      Photo.image.onload = imageOnload
    }
    
    function imageOnload() {
      const { width, height } = Photo.image
      Photo.canvas.width = width
      Photo.canvas.height = height
      // Clear context
      Photo.ctx.clearRect(0, 0, width, height)
      // Draw image in context
      Photo.ctx.drawImage(Photo.image, 0, 0)

      Photo.preview()
    }  
  }
}