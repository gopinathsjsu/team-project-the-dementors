package Prestige.HotelBooking.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Prestige.HotelBooking.entities.Booking;
import Prestige.HotelBooking.entities.Customer;

import java.util.List;


@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {
	@Modifying
    @Transactional
	@Query(value = "Delete from Booking WHERE booking_id=:bookingId", nativeQuery = true)
	void deleteBooking(@Param("bookingId") long bookingId);  
	

	@Query(value = "Select * from Customer WHERE customer_id=:customerId", nativeQuery = true)
	Customer findById(@Param("customerId") long username); 
	
	@Query(value = "Select * from Booking WHERE booking_id=:bookingId", nativeQuery = true)
	Booking findByBookingId(@Param("bookingId") long bookingId);

	@Query(value = "Select * from booking WHERE hotel_id=:hotelId", nativeQuery = true)
	List<Booking> findAllBookings(@Param("hotelId") long hotelId);

	@Query(value = "Select * from booking WHERE hotel_id=:hotelId AND room_id=:roomId", nativeQuery = true)
	List<Booking> findAllBookingsOfRoom(@Param("hotelId") long hotelId, @Param("roomId") long roomId);

}