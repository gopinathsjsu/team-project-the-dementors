import React from "react";
import moment from 'moment';

const EditableRow = ({b,editFormData, handleEditFormChange, handleCancelClick}) => {
    return(
        <tr key={b.bookingId}>
        <td>{b.hotel.hotelName}</td>
        <td>{b.room.roomNo}</td>
        <td>
            <input type="date" required="required" name="bookingFromDate" onChange={handleEditFormChange} value={moment(editFormData.bookingFromDate).format('YYYY-MM-DD')}></input>
        </td>
        <td>
            <input type="date" required="required" name="bookingToDate" onChange={handleEditFormChange} value={moment(editFormData.bookingToDate).format('YYYY-MM-DD')}></input>
        </td>
        <td >{b.price}</td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </td>
    </tr>
    );
};
export default EditableRow;