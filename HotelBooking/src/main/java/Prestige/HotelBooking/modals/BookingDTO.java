package Prestige.HotelBooking.modals;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class BookingDTO {

	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	private Date bookingFromDate;
	
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	private Date bookingToDate;
	
	private long customerId;
	
	private long hotelId;
	
	private long amenitiesId;
	
	private long roomId;
	
	public long getRoomId() {
		return roomId;
	}

	public void setRoomId(long roomId) {
		this.roomId = roomId;
	}

	public long getHotelId() {
		return hotelId;
	}

	public void setHotelId(long hotelId) {
		this.hotelId = hotelId;
	}

	public long getAmenitiesId() {
		return amenitiesId;
	}

	public void setAmenitiesId(long amenitiesId) {
		this.amenitiesId = amenitiesId;
	}

	public Date getBookingFromDate() {
		return bookingFromDate;
	}

	public void setBookingFromDate(Date bookingFromDate) {
		this.bookingFromDate = bookingFromDate;
	}

	public Date getBookingToDate() {
		return bookingToDate;
	}

	public void setBookingToDate(Date bookingToDate) {
		this.bookingToDate = bookingToDate;
	}

	public long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}
	
	
}
