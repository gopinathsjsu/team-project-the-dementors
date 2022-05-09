package Prestige.HotelBooking.services;

import Prestige.HotelBooking.dao.*;
import Prestige.HotelBooking.entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.FalseCondition;
import org.springframework.stereotype.Service;

import Prestige.HotelBooking.modals.BookingDTO;

import java.util.Date;
import java.util.List;
import Prestige.HotelBooking.commons.Common;

@Service
public class BookingServiceImpl {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@Autowired
	private HotelRepository hotelRepository;
	
	@Autowired
	private RoomRepository roomRepository;

	@Autowired
	private RewardRepository rewardRepository;

	
	public Booking saveBooking(BookingDTO bookingDTO) {
		Customer customer = customerRepository.findById(bookingDTO.getCustomerId());
		Hotel hotel = hotelRepository.findById(bookingDTO.getHotelId());
		Room room = roomRepository.getRoomDetails(bookingDTO.getRoomId());
		Booking booking = new Booking();
		booking.setBookingFromDate(bookingDTO.getBookingFromDate());
		booking.setBookingToDate(bookingDTO.getBookingToDate());
		booking.setNumberOfDays(getDifferenceDays(bookingDTO.getBookingFromDate(), bookingDTO.getBookingToDate()));
		booking.setCustomer(customer);
		booking.setHotel(hotel);
		booking.setAmenities(bookingDTO.getAmenities());
		booking.setRoom(room);
		booking.setPrice(bookingDTO.getPrice());
		roomRepository.updateNumberOfAvailableRooms((room.getNumberOfAvailableRooms()-bookingDTO.getNumOfRooms()),bookingDTO.getHotelId(), bookingDTO.getRoomId());
		if ((room.getNumberOfAvailableRooms()-bookingDTO.getNumOfRooms()<=0)){
			roomRepository.updateIsAvailable(false, bookingDTO.getHotelId(), bookingDTO.getRoomId());
		}
		CustomerRewards custRewards = rewardRepository.getCustomerRewards(bookingDTO.getCustomerId());
		double rewards = (bookingDTO.getPrice() * 0.1) + (custRewards.getReward());
		rewardRepository.updateCustomerRewards(rewards,custRewards.getCustomerRewardsId());
		return bookingRepository.save(booking);
	}
	
	public void deleteBooking(long bookingId) {
		bookingRepository.deleteBooking(bookingId);
	}
	
	public Booking updateBooking(BookingDTO bookingDTO, long bookingId) {
		Customer customer = customerRepository.findById(bookingDTO.getCustomerId());
		Hotel hotel = hotelRepository.findById(bookingDTO.getHotelId());
		Booking booking = bookingRepository.findByBookingId(bookingId);
		Room room = roomRepository.getRoomDetails(bookingDTO.getRoomId());
		Booking booking = bookingRepository.findByBookingId(bookingId);
		if (booking != null) {
			booking.setBookingId(bookingId);
			booking.setBookingFromDate(bookingDTO.getBookingFromDate());
			booking.setBookingToDate(bookingDTO.getBookingToDate());
			booking.setNumberOfDays(getDifferenceDays(bookingDTO.getBookingFromDate(), bookingDTO.getBookingToDate()));
			booking.setHotel(hotel);
			booking.setAmenities(bookingDTO.getAmenities());
			booking.setRoom(room);
			roomRepository.updateNumberOfAvailableRooms((room.getNumberOfAvailableRooms()-bookingDTO.getNumOfRooms()),bookingDTO.getHotelId(), bookingDTO.getRoomId());
			if ((room.getNumberOfAvailableRooms()-bookingDTO.getNumOfRooms()<=0)){
				roomRepository.updateIsAvailable(false, bookingDTO.getHotelId(), bookingDTO.getRoomId());
			}
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
