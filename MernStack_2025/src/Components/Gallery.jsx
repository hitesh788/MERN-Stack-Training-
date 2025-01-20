const Gallery = (props) => {
    return (
        <div>
            <h2>Welcome To Gallery</h2>
            <img src="C:\Users\hejos\Downloads\Mern2025_2\MernStack_2025\src\assets\SECE.jpeg" alt="SECE logo" />
            <h3></h3>

          <h2>The image is {props.image}</h2> 
        </div>
    );
}


export default Gallery;
