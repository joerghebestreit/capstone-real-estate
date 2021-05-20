import { useState } from "react"
import "./Add.css"

export default function Add() {
        
        const [ID, setID] = useState("")
        const [city, setCity] = useState("")
        const [street, setStreet] = useState("")
        const [price, setPrice] = useState("")
        const [interior, setInterior] = useState("")
        const [bedrooms, setBedrooms] = useState("")
        const [status, setStatus] = useState("")
        const [build, setBuild] = useState("")
        const [discription, setDiscription] = useState("")
        const [option, setOption] = useState("")
        const [images, setImages] = useState('')
        const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
        const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET_NAME

    function handleSubmit(event){
        event.preventDefault()
        const url = `${process.env.REACT_APP_API_BASE_URL}/properties`;
        
        fetch(url, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ID: ID,
                City: city,
                Street: street,
                Price: price,
                Interior: interior,
                Bedrooms: bedrooms,
                Status: status,
                YearBuild: build,
                Discription: discription,
                Option: option,
                img: images
            })
        })
        .then((res) => res.json())
        .catch((error) => {
            console.error(`Error: ${error}`);
        alert("Seccessfully Submitted")
        })
    }

    function upload(event) {
        const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/image/upload`
    
        const formData = new FormData()
        formData.append('file', event.target.files[0])
        formData.append('upload_preset', PRESET)

        fetch(url, {
        method: "PUT",
        body: formData,
        }).then((res) => res.json())
          .then(onImageSave)
          .catch(err => console.error(err))
      }
    
      function onImageSave(res) {
        setImages(res.url)
      }

    return(
        <form onSubmit={handleSubmit}>
            <h4 className="headlineAdd">Add</h4>
            <div className="formAdd">
                <label for="id" className="lableId">ID:</label>
                <input id="id" className="inputId" value={ID} onChange={event => setID(event.target.value)}></input>
            </div>
            <div className="formAdd">
                <label for="city">City</label>
                <input id="city" className="inputAdd" value={city} onChange={event => setCity(event.target.value)}></input>
                <label for="street">Street</label>
                <input id="street"className="inputAdd" value={street} onChange={event => setStreet(event.target.value)}></input>
                <label for="price">Price (€)</label>
                <input id="price" className="inputAdd" value={price} onChange={event => setPrice(event.target.value)}></input>
                <label for="interior">Interior (Sq. Ft.)</label>
                <input id="interior" className="inputAdd" value={interior} onChange={event => setInterior(event.target.value)}></input>
                <label for="bedrooms">Bedrooms</label>
                <input id="bedrooms" className="inputAdd" value={bedrooms} onChange={event => setBedrooms(event.target.value)}></input>
                <label for="status">Status</label>
                <input id="status" className="inputAdd" value={status} onChange={event => setStatus(event.target.value)}></input>
                <label for="build">Year Build</label>
                <input id="build" className="inputAdd" value={build} onChange={event => setBuild(event.target.value)}></input>
                <label for="discription">Discription</label>
                <input id="discription" className="inputAdd" value={discription} onChange={event => setDiscription(event.target.value)}></input>
                <label for="option">option</label>
                <input id="option" className="inputAdd" value={option} onChange={event => setOption(event.target.value)}></input>
            </div>
            <div className="formAddImg">
                <label className="labelImg">upload image</label>
                <input type="file" name="file" className="inputAddImg" value={images} onChange={upload}></input>
            </div>
            <button type="submit" className="btnAdd">Add</button>
        </form>
    )
}

                