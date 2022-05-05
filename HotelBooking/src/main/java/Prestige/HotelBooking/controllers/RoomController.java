package Prestige.HotelBooking.controllers;

import Prestige.HotelBooking.entities.Booking;
import Prestige.HotelBooking.services.BookingServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class RoomController {
    @Autowired
    private BookingServiceImpl bookingService;

    @GetMapping("/checkRoomAvailability")
    @ResponseBody
    public ResponseEntity<?> checkRoomAvailability(@RequestParam(name = "fromData") Date fDate, @RequestParam(name = "toDate") Date tDate,@RequestParam(name = "hotel") long hotelId,@RequestParam(name = "room") long roomId){
        List<Booking> bookings = bookingService.getAllBookingsOfRoom(hotelId,roomId);
        for (Booking i: bookings){
            if ((fDate.after(i.getBookingFromDate()) && tDate.before(i.getBookingToDate())) || (tDate.after(i.getBookingFromDate()) && tDate.before(i.getBookingToDate()))){
               return new ResponseEntity<Boolean> (false, HttpStatus.OK);
            }
        }
        return new ResponseEntity<Boolean> (true, HttpStatus.OK);
    }
}
