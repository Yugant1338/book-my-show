import React from "react";
import PropTypes from "prop-types";

const Poster = ({ isPlay, src, title, subtitle }) => {
    return (
        <div className="poster">
            <img src={src} alt={title} className="w-full h-full" />
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-sm">{subtitle}</p>
        </div>
    );
};

Poster.propTypes = {
    isPlay: PropTypes.bool,
    src: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default Poster;
