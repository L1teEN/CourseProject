import React from 'react';
import './HistoryBlock.css';

function HistoryBlock() {
    return(
        <div className="history-block">
            <div>
                <h3 className="block-heading">Little History</h3>
                <img src="https://imgur.com/LjEAM7v.png" alt="separator" className="img-separator"/>
                <p className="history-block-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloremque dolorum ea eos facere,
                    fugit illo impedit laborum modi pariatur quia ratione repudiandae tempore.
                    Ab accusamus aliquam animi at aut corporis doloremque
                    eligendi est expedita fugit, laboriosam minima nemo
                    obcaecati officiis optio quis rem repellendus repudiandae tempora vel. Consequatur, et?</p>
            </div>
        </div>
    );
}

export default HistoryBlock;