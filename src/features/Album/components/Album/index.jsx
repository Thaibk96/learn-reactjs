import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <div className="album">
            <div>
                <img className="album-thumbnail" src={album.thumbnailUrl} alt={album.name} />
            </div>
            <p className="album-name">{album.name}</p>
        </div>
    );
}

export default Album;