package Prestige.HotelBooking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Prestige.HotelBooking.entities.Booking;
import Prestige.HotelBooking.entities.Customer;
import Prestige.HotelBooking.modals.BookingDTO;
import Prestige.HotelBooking.modals.CustomerDTO;
import Prestige.HotelBooking.services.BookingServiceImpl;

@RestController
public class BookingController {
	
	@Autowired
	private BookingServiceImpl bookingServiceImpl;

	@PostMapping("/saveBooking")
    public ResponseEntity<?> saveBooking(@RequestBody BookingDTO bookingDTO){
        
        Booking booking = bookingServiceImpl.saveBooking(bookingDTO);
        
        if(booking != null) {
        	return new ResponseEntity<Booking> (booking, HttpStatus.OK);
        }
        return new ResponseEntity<String>("Bad Request", HttpStatus.BAD_REQUEST);
    }
	
	
	@DeleteMapping("/deleteBooking/{bookingId}")
    public void deleteBooking(@PathVariable Long bookingId){
        
        bookingServiceImpl.deleteBooking(bookingId);
        
    }
	
	@PutMapping("/updateBooking/{bookingId}")
    public ResponseEntity<?> updateBooking(@RequestBody BookingDTO bookingDTO, @PathVariable Long bookingId){
        
        Booking booking = bookingServiceImpl.updateBooking(bookingDTO, bookingId);
        
        if(booking != null) {
        	return new ResponseEntity<Booking> (booking, HttpStatus.OK);
        }
        return new ResponseEntity<String>("Bad Request", HttpStatus.BAD_REQUEST);
    }
}
