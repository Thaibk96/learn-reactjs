import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: "A",
            thumbnailUrl: "https://www.pixsy.com/wp-content/uploads/2021/04/edi-libedinsky-1bhp9zBPHVE-unsplash-1-1024x683.jpeg"
        },
        {
            id: 2,
            name: "B",
            thumbnailUrl: "https://www.pixsy.com/wp-content/uploads/2021/04/edi-libedinsky-1bhp9zBPHVE-unsplash-1-1024x683.jpeg"
        },
        {
            id: 3,
            name: "C",
            thumbnailUrl: "https://www.pixsy.com/wp-content/uploads/2021/04/edi-libedinsky-1bhp9zBPHVE-unsplash-1-1024x683.jpeg"
        },
    ]

    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;

