import createCanvas from './Canvas.js'
import setPreview from './Preview.js'
import configLoad from './Load.js'
import createSelectionTool from './SelectionTool.js'
import Crop from './Crop.js'
import Download from './Download.js'

const Photo = {}

createCanvas(Photo)
setPreview(Photo)
configLoad(Photo)
createSelectionTool(Photo)
Crop(Photo)
Download(Photo)

export default Photo