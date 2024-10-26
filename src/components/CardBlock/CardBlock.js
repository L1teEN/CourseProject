import React from 'react';
import './CardBlock.css';
import Card from './Card';

function CardBlock() {
    return (
        <div className="card-block" id="services">
            <Card image="https://i.imgur.com/RURPiGH.png" heading="Idea" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut culpa cupiditate dolorem error est facere harum ipsa, libero minus nisi, obcaecati perferendis quos reiciendis, reprehenderit sed sint tempora tempore veritatis." />
            <Card image="https://i.imgur.com/KtJlZXa.png" heading="Work" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut culpa cupiditate dolorem error est facere harum ipsa, libero minus nisi, obcaecati perferendis quos reiciendis, reprehenderit sed sint tempora tempore veritatis." />
            <Card image="https://i.imgur.com/14Ae0XJ.png" heading="Deliver" paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut culpa cupiditate dolorem error est facere harum ipsa, libero minus nisi, obcaecati perferendis quos reiciendis, reprehenderit sed sint tempora tempore veritatis." />
        </div>
    );
}

export default CardBlock;