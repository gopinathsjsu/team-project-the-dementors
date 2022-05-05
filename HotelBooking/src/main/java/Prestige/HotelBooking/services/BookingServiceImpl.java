package Prestige.HotelBooking.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Prestige.HotelBooking.dao.BookingRepository;
import Prestige.HotelBooking.dao.CustomerRepository;
import Prestige.HotelBooking.entities.Booking;
import Prestige.HotelBooking.entities.Customer;
import Prestige.HotelBooking.entities.User;
import Prestige.HotelBooking.modals.BookingDTO;
import Prestige.HotelBooking.modals.CustomerDTO;

import java.util.List;

@Service
public class BookingServiceImpl {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private BookingRepository bookingRepository;

	public Booking saveBooking(BookingDTO bookingDTO) {
		Customer customer = customerRepository.findById(bookingDTO.getCustomerId());
		Booking booking = new Booking();
		booking.setBookingFromDate(bookingDTO.getBookingFromDate());
		booking.setBookingToDate(bookingDTO.getBookingToDate());
		booking.setCustomer(customer);
		return bookingRepository.save(booking);
	}
	
	public void deleteBooking(long bookingId) {
		bookingRepository.deleteBooking(bookingId);
	}
	
	public Booking updateBooking(BookingDTO bookingDTO, long bookingId) {
		Customer customer = customerRepository.findById(bookingDTO.getCustomerId());
		Booking booking = bookingRepository.findByBookingId(bookingId);
		if (booking != null) {
			booking.setBookingFromDate(bookingDTO.getBookingFromDate());
			booking.setBookingToDate(bookingDTO.getBookingToDate());
			booking.setCustomer(customer);
			return bookingRepository.save(booking);
		}
		return booking;

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
