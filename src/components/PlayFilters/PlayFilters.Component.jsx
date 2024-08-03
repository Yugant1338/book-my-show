import React from "react";
import PropTypes from "prop-types";

const PlayFilters = ({ title, tags }) => {
    return (
        <div className="play-filters mb-4">
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <div key={index} className="border border-gray-400 p-2 rounded">
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};

PlayFilters.propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PlayFilters;
