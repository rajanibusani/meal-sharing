import React from "react";
const Star = ({ isHighlighted }) => (
    <span className={isHighlighted ? "highlighted" : ""}>
        ★
    </span>
);
const Stars = ({ stars }) => {
    return (
        <div className="starRatingInput">
            Reviews :
            <Star isHighlighted={stars >= 1} />
            <Star isHighlighted={stars >= 2} />
            <Star isHighlighted={stars >= 3} />
            <Star isHighlighted={stars >= 4} />
            <Star isHighlighted={stars >= 5} />
        </div>
    );
};

export default Stars;