import Photo from './Photo/index.js'

window.addEventListener('DOMContentLoaded', () => {
    Photo.load()
})

// Select image
document.getElementById('select-image').onclick = () => {
  document.getElementById('photo-file').click()
}

// Crop image
Photo.cropButton.onclick = () => Photo.crop()

// Export image
Photo.downloadButton.onclick = () => Photo.download()