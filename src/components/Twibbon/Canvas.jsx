import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Canvas = ({ photo, frame, setPhoto, canvasRef}) => {
  const MAX_WIDTH = 1000
	const MAX_HEIGHT = 1000

  const [mouseDownFlag, setMouseDownFlag] = useState(false)
  const [mouseDownPos, setMouseDownPos] = useState({x:0,y:0})
  const [offsetDis, setOffsetDis] = useState({left:0, top:0})

  const [size, setSize] = useState({width:0, height:0})

  const [rotate, setRotate] = useState(0);
  // const [degree, setDegree] = useState(0)

  const windowToCanvas = (canvas, x, y) => {
    var canvasBox = canvas.getBoundingClientRect()
    return {
      x: (x - canvasBox.left) * (canvas.width / canvasBox.width),
      y: (y - canvasBox.top) * (canvas.height / canvasBox.height),
    }
  }

  const handleMouseDown = (event) => {
    event.stopPropagation()
    event.preventDefault()
    const { clientX, clientY } = event
    let mouseX = clientX
    let mouseY = clientY
    if (rotate >= 270 || (rotate <= -90 && rotate > -180)) {
      mouseX = -clientY
      mouseY = clientX
    }else if(rotate >= 180 || (rotate <= -180 && rotate > -270)) {
      mouseX = -clientX
      mouseY = -clientY
    } else if(rotate >= 90 || (rotate <= -270 && rotate > -360)) {
      mouseX = clientY
      mouseY = -clientX
    } 

    const canvas = canvasRef.current
    const pos = windowToCanvas(canvas, mouseX, mouseY)
    canvas.style.cursor = 'move'
    setMouseDownFlag(true)
    setMouseDownPos({
      x: pos.x,
      y: pos.y,
    })
  }

  const handleMouseMove = (event) => {
    event.stopPropagation()
    event.preventDefault()
    
    if(!mouseDownFlag) return
    const { clientX, clientY } = event
    const canvas = canvasRef.current
    let mouseX = clientX
    let mouseY = clientY
    if (rotate >= 270 || (rotate <= -90 && rotate > -180)) {
      mouseX = -clientY
      mouseY = clientX
    }else if(rotate >= 180 || (rotate <= -180 && rotate > -270)) {
      mouseX = -clientX
      mouseY = -clientY
    } else if(rotate >= 90 || (rotate <= -270 && rotate > -360)) {
      mouseX = clientY
      mouseY = -clientX
    } 

    const pos = windowToCanvas(canvas, mouseX, mouseY)

    const diffX = pos.x - mouseDownPos.x
    const diffY = pos.y - mouseDownPos.y

    if((diffX === 0 && diffY === 0)) return

    let offsetX = parseInt(`${diffX + offsetDis.left}`, 10)
    let offsetY = parseInt(`${diffY + offsetDis.top}`, 10)

    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, MAX_WIDTH, MAX_HEIGHT)

    // ctx.save()
    // ctx.translate(MAX_WIDTH/4, MAX_WIDTH/4)
    // ctx.rotate(degree)
    ctx.drawImage(photo, offsetX, offsetY, size.width, size.height)
    // ctx.restore()
    ctx.drawImage(frame, 0, 0, MAX_WIDTH, MAX_HEIGHT)

    setMouseDownPos({
      x: pos.x,
      y: pos.y,
    })

    setOffsetDis({
      left: offsetX,
      top: offsetY,
    })
  }

  const handleMouseUp = (event) => {
    event.stopPropagation()
    event.preventDefault()
    const canvas = canvasRef.current
    canvas.style.cursor = 'default'
    setMouseDownFlag(false)
  }

  const handleWheelImage = (event) => {
    event.stopPropagation()
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const bigger = event.deltaY > 0 ? -1 : 1

    const enlargeRate = 1.1

    const shrinkRate = 0.9

    const rate = bigger > 0 ? enlargeRate : shrinkRate
    const width = photo.width * rate
    const height = photo.height * rate

    ctx.clearRect(0,0,MAX_WIDTH, MAX_HEIGHT)
    // ctx.save()
    // ctx.translate(MAX_WIDTH/4, MAX_HEIGHT/4)
    // ctx.rotate(degree)
    ctx.drawImage(photo, offsetDis.left, offsetDis.top, width, height)
    // ctx.restore()
    ctx.drawImage(frame, 0, 0, MAX_WIDTH, MAX_HEIGHT)
    
    photo.width = width
    photo.height = height
    setPhoto(photo)
    setSize({width, height})
    
    return false
  };

  // const rotateImage = (degrees) => {
  //   const canvas = canvasRef.current
  //   const ctx = canvas.getContext('2d')
  //   const rotateDegree = degrees*Math.PI/180

  //   ctx.clearRect(0,0,MAX_WIDTH, MAX_HEIGHT)
  //   ctx.save()
  //   ctx.translate(MAX_WIDTH/2, MAX_WIDTH/2)
  //   ctx.rotate(rotateDegree)
  //   const offsetX = -size.width/2
  //   const offsetY = -size.height/2
  //   ctx.drawImage(photo, offsetX, offsetY, size.width, size.height)
  //   ctx.restore()
  //   // ctx.drawImage(image2, 0, 0, MAX_WIDTH, MAX_HEIGHT)

  //   setDegree(rotateDegree)
  // }

  // const handleRightRotateImage = (event) => {
  //   event.stopPropagation()
  //   event.preventDefault()
    
  //   const degrees = rotate + 90

  //   rotateImage(degrees)

  //   if(degrees>=360) {
  //     setRotate(0)
  //   } else {
  //     setRotate(degrees)
  //   }
  // }

  // const handleLeftRotateImage = (event) => {
  //   event.stopPropagation()
  //   event.preventDefault()
    
  //   const degrees = rotate - 90

  //   rotateImage(degrees)

  //   if(rotate<=-360) {
  //     setRotate(0)
  //   } else {
  //     setRotate(degrees)
  //   }
  // }

  const handleZoomIn = (event) => {
    event.stopPropagation()
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const bigger = 1

    const enlargeRate = 1.1

    const shrinkRate = 0.9

    const rate = bigger > 0 ? enlargeRate : shrinkRate
    const width = photo.width * rate
    const height = photo.height * rate

    ctx.clearRect(0,0,MAX_WIDTH, MAX_HEIGHT)
    // ctx.save()
    // ctx.translate(MAX_WIDTH/4, MAX_HEIGHT/4)
    // ctx.rotate(degree)
    ctx.drawImage(photo, offsetDis.left, offsetDis.top, width, height)
    // ctx.restore()
    ctx.drawImage(frame, 0, 0, MAX_WIDTH, MAX_HEIGHT)
    
    photo.width = width
    photo.height = height
    setPhoto(photo)
    setSize({width, height})
  }

  const handleZoomOut = (event) => {
    event.stopPropagation()
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const bigger = -1

    const enlargeRate = 1.1

    const shrinkRate = 0.9

    const rate = bigger > 0 ? enlargeRate : shrinkRate
    const width = photo.width * rate
    const height = photo.height * rate

    ctx.clearRect(0,0,MAX_WIDTH, MAX_HEIGHT)
    // ctx.save()
    // ctx.translate(MAX_WIDTH/4, MAX_HEIGHT/4)
    // ctx.rotate(degree)
    ctx.drawImage(photo, offsetDis.left, offsetDis.top, width, height)
    // ctx.restore()
    ctx.drawImage(frame, 0, 0, MAX_WIDTH, MAX_HEIGHT)
    
    photo.width = width
    photo.height = height
    setPhoto(photo)
    setSize({width, height})
  }

  useEffect(() => {
    setSize({width:photo.width,height:photo.height})
  }, [photo])

  useEffect(() => {
		if(photo && frame && canvasRef) {
			const ctx = canvasRef.current.getContext("2d")
			ctx.fillStyle = "#FFF"
			ctx.fillRect(0, 0, MAX_WIDTH, MAX_HEIGHT)

      let width = photo.width
      let height = photo.height

      if (width > height) {
        if (width > MAX_WIDTH) {
            height = height * (MAX_WIDTH / width);
            width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
            width = width * (MAX_HEIGHT / height);
            height = MAX_HEIGHT;
        }
      }

      photo.width = width
      photo.height = height
      setPhoto(photo)
      setSize({width:photo.width, height:photo.height})

      ctx.drawImage(photo, 0, 0, photo.width, photo.height)
			ctx.drawImage(frame, 0, 0, MAX_WIDTH, MAX_HEIGHT)
		}	
	}, [photo, frame, canvasRef, MAX_WIDTH, MAX_HEIGHT, setPhoto])

  return (
    <div className="t-photos">
      <canvas 
        ref={canvasRef} 
        width={MAX_WIDTH} 
        height={MAX_HEIGHT}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheelImage}
      >
      </canvas>
      <div onClick={handleZoomIn} className="bt-zoom bt-zoom-top"><AddIcon/></div>
      <div onClick={handleZoomOut} className="bt-zoom bt-zoom-bottom"><RemoveIcon/></div>
      {/* <div onClick={handleLeftRotateImage} className="bt-rot bt-rot-right"><Rotate90DegreesCwIcon/></div>
      <div onClick={handleRightRotateImage} className="bt-rot bt-rot-left"><Rotate90DegreesCcwIcon/></div> */}
    </div>
  );
}

export default Canvas