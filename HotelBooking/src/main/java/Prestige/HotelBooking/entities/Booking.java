package Prestige.HotelBooking.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "booking")
@JsonIdentityInfo(
		   generator = ObjectIdGenerators.PropertyGenerator.class,
		   property = "bookingId")
public class Booking {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long bookingId;
	
	private Date bookingFromDate;
	
	private Date bookingToDate;
	
	private int numberOfDays;
	
	public int getNumberOfDays() {
		return numberOfDays;
	}

	public void setNumberOfDays(int numberOfDays) {
		this.numberOfDays = numberOfDays;
	}

	@ManyToOne
    @JoinColumn(name="cust_id", referencedColumnName = "customerId")
	private Customer customer;

	@ManyToOne
	@JoinColumn(name="hotel_id", referencedColumnName = "hotelId")
	private Hotel hotel;

	@ManyToOne
	@JoinColumn(name="room_id", referencedColumnName = "roomId")
	private Room room;
	
	@OneToOne(mappedBy="booking")
	private Amenities amenities;
	

	public Amenities getAmenities() {
		return amenities;
	}

	public void setAmenities(Amenities amenities) {
		this.amenities = amenities;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public long getBookingId() {
		return bookingId;
	}

	public void setBookingId(long bookingId) {
		this.bookingId = bookingId;
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

	public Hotel getHotel() {
		return hotel;
	}

	public void setHotel(Hotel hotel) {
		this.hotel = hotel;
	}

	public Room getRoom() {
		return room;
	}

	public void setRoom(Room room) {
		this.room = room;
	}
}
