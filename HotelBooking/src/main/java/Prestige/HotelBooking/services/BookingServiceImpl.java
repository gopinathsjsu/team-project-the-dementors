package Prestige.HotelBooking.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Prestige.HotelBooking.dao.AmenitiesRepository;
import Prestige.HotelBooking.dao.BookingRepository;
import Prestige.HotelBooking.dao.CustomerRepository;
import Prestige.HotelBooking.dao.HotelRepository;
import Prestige.HotelBooking.dao.RoomRepository;
import Prestige.HotelBooking.entities.Amenities;
import Prestige.HotelBooking.entities.Booking;
import Prestige.HotelBooking.entities.Customer;
import Prestige.HotelBooking.entities.Hotel;
import Prestige.HotelBooking.entities.Room;
import Prestige.HotelBooking.entities.User;
import Prestige.HotelBooking.modals.BookingDTO;
import Prestige.HotelBooking.modals.CustomerDTO;

import java.util.Date;
import java.util.List;

@Service
public class BookingServiceImpl {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@Autowired
	private HotelRepository hotelRepository;

	@Autowired
	private AmenitiesRepository amenitiesRepository;
	
	@Autowired
	private RoomRepository roomRepository;
	
	public Booking saveBooking(BookingDTO bookingDTO) {
		Customer customer = customerRepository.findById(bookingDTO.getCustomerId());
		Hotel hotel = hotelRepository.findById(bookingDTO.getHotelId());
		Amenities amenities = amenitiesRepository.findById(bookingDTO.getAmenitiesId());
		Room room = roomRepository.getRoomDetails(bookingDTO.getRoomId());
		Booking booking = new Booking();
		booking.setBookingFromDate(bookingDTO.getBookingFromDate());
		booking.setBookingToDate(bookingDTO.getBookingToDate());
		booking.setNumberOfDays(getDifferenceDays(bookingDTO.getBookingFromDate(), bookingDTO.getBookingToDate()));
		booking.setCustomer(customer);
		booking.setHotel(hotel);
		booking.setAmenities(amenities);
		booking.setRoom(room);
		return bookingRepository.save(booking);
	}
	
	public void deleteBooking(long bookingId) {
		bookingRepository.deleteBooking(bookingId);
	}
	
	public Booking updateBooking(BookingDTO bookingDTO, long bookingId) {
		Booking booking = bookingRepository.findByBookingId(bookingId);
		if (booking != null) {
			booking.setBookingId(bookingId);
			booking.setBookingFromDate(bookingDTO.getBookingFromDate());
			booking.setBookingToDate(bookingDTO.getBookingToDate());
			booking.setNumberOfDays(getDifferenceDays(bookingDTO.getBookingFromDate(), bookingDTO.getBookingToDate()));
			return bookingRepository.save(booking);
		}
		return booking;

	}

	public int getDifferenceDays(Date d1, Date d2) {
	    int daysdiff = 0;
	    long diff = d2.getTime() - d1.getTime();
	    System.out.println("dates "+ d2.getTime() + "d1 " + d1.getTime());
	    long diffDays = diff / (24 * 60 * 60 * 1000);
	    daysdiff = (int) diffDays;
	    return daysdiff;
	}
	
	public List<Booking> getAllHotelBooking(long hotelId){
		List<Booking> bookings = bookingRepository.findAllBookings(hotelId);
		return bookings;
	}

	public List<Booking> getAllBookingsOfRoom(long hotelId, long roomId){
		List<Booking> bookings = bookingRepository.findAllBookingsOfRoom(hotelId, roomId);
		return bookings;
	}
}
