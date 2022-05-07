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

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@RestController
public class RoomController {
    @Autowired
    private BookingServiceImpl bookingService;

    @GetMapping("/checkRoomAvailability")
    @ResponseBody
    public ResponseEntity<?> checkRoomAvailability(@RequestParam(name = "fromDate") String fDate, @RequestParam(name = "toDate") String tDate,@RequestParam(name = "hotelId") String hotelId,@RequestParam(name = "roomId") String roomId) throws ParseException {
        List<Booking> bookings = bookingService.getAllBookingsOfRoom(Long.parseLong(hotelId),Long.parseLong(roomId));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd", Locale.ENGLISH);
        Date fromDate = formatter.parse(fDate);
        Date toDate = formatter.parse(tDate);
        for (Booking i: bookings){
            if ((fromDate.after(i.getBookingFromDate()) && toDate.before(i.getBookingToDate())) || (toDate.after(i.getBookingFromDate()) && toDate.before(i.getBookingToDate()))){
               return new ResponseEntity<Boolean> (false, HttpStatus.OK);
            }
        }
        return new ResponseEntity<Boolean> (true, HttpStatus.OK);
    }
}
