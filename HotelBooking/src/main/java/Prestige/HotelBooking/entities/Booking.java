package Prestige.HotelBooking.entities;

import java.util.Date;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
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

	private String amenities;

	private float price;

	@ManyToOne
    @JoinColumn(name="cust_id", referencedColumnName = "customerId")
	private Customer customer;

	@ManyToOne
	@JoinColumn(name="hotel_id", referencedColumnName = "hotelId")
	private Hotel hotel;

	@ManyToOne
	@JoinColumn(name="room_id", referencedColumnName = "roomId")
	private Room room;


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

	public void setAmenities(String amenities) {
		this.amenities = amenities;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getAmenities() {
		return amenities;
	}
}
