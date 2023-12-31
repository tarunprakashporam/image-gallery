import React ,{userState}from "react";
//write a code for react boiler plate
const ImageSearch = ({ searchText }) => {   
    const [text, setText] = React.useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        searchText(text);
    };
    //make input and button more colorful//search from image

    return ( 
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="flex items-center border-b border-b-2 border-yellow-500 py-2">
                <input  onChange={(e) => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />         
                <button className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-700 border-yellow-500 hover:border-yellow-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">Search</button>       

            </div>
        </form>
        </div>
    );
    }
    export default ImageSearch;