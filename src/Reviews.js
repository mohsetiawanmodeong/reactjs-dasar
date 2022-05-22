import React from 'react';
import './App.css';

function ReviewItems() {
    // mempersiapkan data dummy JSON
    const users = [
        {
            "id": 1,
            "name": "Moh. Setiawan Modeong",
            "review": "Harganya mahal tapi kualitas kaleng-kaleng nih bos. Gasken...",
            "photo": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
        },
        {
            "id": 2,
            "name": "Uyo Modeong",
            "review": "Harganya mahal tapi kualitas kaleng-kaleng nih bos. Gasken...",
            "photo": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            "id": 3,
            "name": "Obay Modeong",
            "review": "Harganya mahal tapi kualitas kaleng-kaleng nih bos. Gasken...",
            "photo": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];
    const listReview = users.map((itemReview) =>
        <div key={itemReview.id} className="Item">
            <img src={itemReview.photo} alt="photo"></img>
            <div className="User">
                <h3>{itemReview.name}</h3>
                <p>{itemReview.review}</p>
            </div>
        </div>
    );
    return (
        <div className="Review-box">
            <h2>Reviews</h2>
            {listReview}
        </div>
    );
}

export default ReviewItems;