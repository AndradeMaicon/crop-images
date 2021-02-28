export default function(Photo) {
  Photo.cropButton = document.getElementById('crop-image')

  Photo.crop= () => {
    const {width: imgW, height: imgH} = Photo.image
    const {width: previewW, height: previewH} = Photo.photoPreview

    const [ widthFactor, heightFactor ] = [
      +(imgW / previewW),
      +(imgH / previewH)
    ]

    const [ selectionWidth, selectionHeight ] = [
      +Photo.selection.style.width.replace('px', ''),
      +Photo.selection.style.height.replace('px', '')
    ]

    const [ croppedWidth, croppedHeight ] = [
      +(selectionWidth * widthFactor),
      +(selectionHeight * heightFactor)
    ]

    const [actualX, actualY] = [
      +(Photo.relativeStartX * widthFactor),
      +(Photo.relativeStartY * heightFactor)
    ]

    // Pegar do ctx a imagem cortada
    const croppedImage = Photo.ctx.getImageData(actualX, actualY,
    croppedWidth, croppedHeight)

    // Limpar o ctx
    Photo.ctx.clearRect(0, 0, Photo.ctx.width, Photo.ctx.height)

    // Ajuste de proporcoes
    Photo.image.width = Photo.canvas.width = croppedWidth
    Photo.image.height = Photo.canvas.height = croppedHeight

    // Adicionar a imagem cortada ao ctx
    Photo.ctx.putImageData(croppedImage, 0, 0)

    // Esconder a ferramenta de selecao
    Photo.selection.style.display = 'none'

    // Atualizar o preview da imagem
    Photo.photoPreview.src = Photo.canvas.toDataURL()

    // Mostrar o botao de download
    Photo.downloadButton.style.display = 'initial'
  }
}