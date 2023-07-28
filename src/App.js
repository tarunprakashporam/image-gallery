import React,{useState,useEffect} from 'react';
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'
function App() {
    const  [images,setImages] = useState([]);
    const [isloading ,setIsLoading ] = useState((true));
    const [term, setTerm] = useState('');
    useEffect(() =>{
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    },[term]);
  return (
<div className="container mx-auto">
    <h1 className="text-5xl text-center mx-auto mt-32">Tarun Image Gallery</h1>
    <div>
        <ImageSearch searchText={(text) => setTerm(text) }/>
       {!isloading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
    </div>
<div className="grid grid-cols-3 gap-4 mx-auto ">
        {images.map(image => (
            <ImageCard key={image.id } image={image}/>
        ))}
    </div>
 
    </div>
  );
}

export default App;
