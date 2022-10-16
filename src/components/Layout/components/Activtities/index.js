import './Activities.scss';
import { useState } from 'react';
import axios from 'axios';
function History() {
    const [activities, setActivities] = useState(() => {
        axios.get('http://localhost:8080/order/list-all-orders-user-itself').then((res) => {
            return res.data || [];
        });
    });
    return (
        <div>
            <h1>Order activities</h1>
            {/* {activities.map((ac, index) => (
                <div>
                    <span>{ac.service.name}</span>
                    <span>{ac.service.price}</span>
                    <span>{ac.service.type}</span>
                    <span>{ac.date}</span>
                    <span>{ac.status}</span>
                </div>
            ))} */}
        </div>
    );
}
export default History;
