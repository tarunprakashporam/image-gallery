import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div>

            <div className='max-w-sm mx-auto md:ml-10 rounded overflow-hidden shadow-lg'>
                <img src={image.webformatURL} alt={image.tags} className='w-full' />
                <div className='px-6 py-4'>
                    <div className='font-bold text-yellow-500 text-xl mb-2'>
                        Photo by {image.user}
                    </div>
                    <ul>
                        <li>
                            <strong>Views:</strong> {image.views}
                        </li>
                        <li>
                            <strong>Downloads: </strong> {image.downloads}
                        </li>
                        <li>
                            <strong>Likes:</strong> {image.likes}
                        </li>
                    </ul>
                </div>

                <div className='px-6 py-4'>
                    {image.tags.split(',').map((tag) => (
                        <span
                            key={tag}
                            className='inline-block bg-gray-200 rounded-full px-2 py-0 text-sm font-semibold text-gray-700 mr-2'
                        >
              {tag.trim()}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
