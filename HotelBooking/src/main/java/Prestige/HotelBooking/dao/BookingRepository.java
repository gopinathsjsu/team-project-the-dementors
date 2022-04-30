package Prestige.HotelBooking.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Prestige.HotelBooking.entities.Booking;
import Prestige.HotelBooking.entities.Customer;


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

}