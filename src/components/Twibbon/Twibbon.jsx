import React, { useState, useRef, useEffect} from "react";
import Canvas from "./Canvas";
// import Rotate90DegreesCcwIcon from '@mui/icons-material/Rotate90DegreesCcw';
// import Rotate90DegreesCwIcon from '@mui/icons-material/Rotate90DegreesCw';

import "./Twibbon.css";

const Twibbon = ({data}) => {
	const [file, setFile] = useState(null)
	const [image, setImage] = useState(new Image())
	const [image2, setImage2] = useState(new Image())
  
	const [check, setCheck] = useState(false)
	
	
  const canvasRefference = useRef(null)

  const download = () => {
    let canvas = canvasRefference.current
    let url = canvas.toDataURL("image/png")
    let link = document.createElement('a')
    link.download = 'filename.png'
    link.href = url
    link.click()
  }

	const selectImage = (event) => {
		setFile(()=>URL.createObjectURL(event.target.files[0]))
		setCheck(true)
	}

	useEffect(() => {
		const twibbonImage = new Image()
		const photoImage = new Image()

		photoImage.src = file
		photoImage.onload = () => setImage(photoImage)
		const timer = setTimeout(() => {
			twibbonImage.src = `${data[0].url}`
    }, 500);
		twibbonImage.onload = () => setImage2(twibbonImage)

		return () => clearTimeout(timer);
	}, [file, data])


	return (
			<div className="t-main">
				<div className="t-canvas">
					{/* <h4>Pilih Foto Kamu!!!</h4> */}
          <Canvas photo={image} frame={image2} setPhoto={setImage} canvasRef={canvasRefference} />
					{
						check?
						<div onClick={download} className="t-download">Download Twibbon</div>:
						<input type="file" onChange={selectImage} accept="image/jpeg, image/png, image/jpg"/>
						}
          
          
				</div>
			</div>
	);
}

export default Twibbon;