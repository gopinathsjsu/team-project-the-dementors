package Prestige.HotelBooking.services;

import Prestige.HotelBooking.dao.*;
import Prestige.HotelBooking.entities.*;
import Prestige.HotelBooking.modals.BookingDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
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
		double rewards;
		if (custRewards != null){
			 rewards = (bookingDTO.getPrice() * 0.1) + (custRewards.getReward());
			rewardRepository.updateCustomerRewards(rewards,custRewards.getCustomerRewardsId());
		}else {
			rewards = (bookingDTO.getPrice() * 0.1);
			CustomerRewards reward  = new CustomerRewards();
			reward.setReward(rewards);
			reward.setCustomer(customer);
			rewardRepository.save(reward);
		}
		return bookingRepository.saveAndFlush(booking);
	}
	
	public void deleteBooking(long bookingId) {
		bookingRepository.deleteBooking(bookingId);
	}
	
	public Booking updateBooking(BookingDTO bookingDTO, long bookingId) {
		Customer customer = customerRepository.findById(bookingDTO.getCustomerId());
		Hotel hotel = hotelRepository.findById(bookingDTO.getHotelId());
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
			booking.setCustomer(customer);
			roomRepository.updateNumberOfAvailableRooms((room.getNumberOfAvailableRooms()-bookingDTO.getNumOfRooms()),bookingDTO.getHotelId(), bookingDTO.getRoomId());
			if ((room.getNumberOfAvailableRooms()-bookingDTO.getNumOfRooms()<=0)){
				roomRepository.updateIsAvailable(false, bookingDTO.getHotelId(), bookingDTO.getRoomId());
			}
			return bookingRepository.saveAndFlush(booking);
		}
		return booking;

	}

	public int getDifferenceDays(Date d1, Date d2) {
	    int daysdiff = 0;
	    long diff = d2.getTime() - d1.getTime();
	    long diffDays = diff / (24 * 60 * 60 * 1000);
	    daysdiff = (int) diffDays;
	    return daysdiff;
	}
	
	public List<Booking> getAllHotelBooking(long hotelId){
		List<Booking> bookings = bookingRepository.findAllBookings(hotelId);
		return bookings;
	}

	public List<Booking> getAllBookingsOfRoom(long hotelId, long roomId) throws SQLException {
		ResultSet rs = bookingRepository.findAllBookingsOfRoom(hotelId, roomId);
		return (List<Booking>) rs;
	}
}
