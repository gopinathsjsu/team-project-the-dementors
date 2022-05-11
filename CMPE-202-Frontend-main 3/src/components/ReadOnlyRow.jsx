import React from "react";
import moment from 'moment';

const ReadOnlyRow = ({b, handleEditClick, handleDeleteClick}) => {
    // console.log(b.room.roomNo,"In readonlyrow")
    return(
        <tr key={b.bookingId}>
            {/* <td>{console.log(b.room.roomNo)}</td> */}
            <td>{b.hotel.hotelName}</td>
            <td>{b.room.roomNo}</td>
            <td>{moment(b.bookingFromDate).format('YYYY-MM-DD')}</td>
            <td >{moment(b.bookingToDate).format('YYYY-MM-DD')}</td>
            <td >{b.price}</td>
            <td >
                <button type="button" onClick={(event)=>handleEditClick(event,b)}>Edit</button>
                <button type="button" onClick={(event)=>handleDeleteClick(event,b.bookingId)}>Delete</button>
            </td>
        </tr>
    );
};
export default ReadOnlyRow;