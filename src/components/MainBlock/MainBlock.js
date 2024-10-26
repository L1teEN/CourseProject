import React from 'react';
import './MainBlock.css';

function MainBlock() {
    return(
        <div className="main-block">
            <div className="main-block-text">
                <p className="main-block-paragraph">Design / Development / Photography</p>
                <h1 className="heading" style={{marginTop: 45}}>Creativity have new level</h1>
                <div className="main-block-buttons" style={{marginTop: 45}}>
                    <button className="main-block-preview-button">Preview</button>
                    <button className="main-block-get-button">Get Theme</button>
                </div>
            </div>
        </div>
    );
}

export default MainBlock;