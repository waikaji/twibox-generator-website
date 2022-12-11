import React, { useState, useRef, useEffect} from "react";
import {useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { clickDownloader } from "../../actions/campaign";
import Canvas from "./Canvas";

import "./Twibbon.css";

const Twibbon = ({data}) => {
	const [file, setFile] = useState(null)
	const [image, setImage] = useState(new Image())
	const [image2, setImage2] = useState(new Image())
  
	const [check, setCheck] = useState(false)
	const params = useParams()

	const dispatch = useDispatch();

  const canvasRefference = useRef(null)

	const makeid = (length) => {
			var result           = '';
			var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
			var charactersLength = characters.length;
			for ( var i = 0; i < length; i++ ) {
					result += characters.charAt(Math.floor(Math.random() * charactersLength));
			}
			return result;
	}

  const download = () => {
    let canvas = canvasRefference.current
    let url = canvas.toDataURL("image/png")
    let link = document.createElement('a')
		let filename = makeid(20)
    link.download = `twibox-${filename}.png`
    link.href = url
    link.click()
		console.log(params.id)
		dispatch(clickDownloader(params.id))	
  }

	const selectImage = (event) => {
		setFile(()=>URL.createObjectURL(event.target.files[0]))
		setCheck(true)
	}

	useEffect(() => {
		const twibbonImage = new Image()
		twibbonImage.crossOrigin = "*"

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
						(
							<>
								<input id="upload-button" type="file" onChange={selectImage} accept="image/jpeg, image/png, image/jpg" hidden/>
								<label htmlFor="upload-button" className="t-download">Upload Image</label>
							</>
						)
						}
          
          
				</div>
			</div>
	);
}

export default Twibbon;