package Prestige.HotelBooking.controllers;

import Prestige.HotelBooking.commons.Common;
import Prestige.HotelBooking.entities.Booking;
import Prestige.HotelBooking.entities.Hotel;
import Prestige.HotelBooking.entities.Room;
import Prestige.HotelBooking.services.BookingServiceImpl;
import Prestige.HotelBooking.services.HotelServiceImpl;
import Prestige.HotelBooking.services.RoomServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@RestController
public class HotelController {

    @Autowired
    private HotelServiceImpl hotelService;

    @Autowired
    private BookingServiceImpl bookingService;

    @Autowired
    private RoomServiceImpl roomService;

    @CrossOrigin(origins = "*")
    @GetMapping("/getHotels")
    @ResponseBody
    public ResponseEntity<?> fetchHotels(@RequestParam(required = false, name = "city") String cityName, @RequestParam(required = false, name = "state") String stateName){
        if (cityName != null){
           List<Hotel> hotels =  hotelService.findHotelByCity(cityName);
           if (hotels.size()>0){
                return new ResponseEntity<List<Hotel>> (hotels, HttpStatus.OK);
            }else{
               return new ResponseEntity<String>("No hotels found in the city " + cityName, HttpStatus.BAD_REQUEST);
           }
        }else if  (stateName != null){
            List<Hotel> hotels =  hotelService.findHotelByState(stateName);
            if (hotels.size()>0){
                return new ResponseEntity<List<Hotel>> (hotels, HttpStatus.OK);
            }else{
                return new ResponseEntity<String>("No hotels found in the state " + stateName, HttpStatus.BAD_REQUEST);
            }
        }
        List<Hotel> hotels = hotelService.getAllHotels();
        return new ResponseEntity<List<Hotel>> (hotels, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/getHotelBooking")
    @ResponseBody
    public ResponseEntity<?> getHotelBookings(@RequestParam(name = "hotelId") String hotelId){
        List<Booking> bookings = bookingService.getAllHotelBooking(Long.parseLong(hotelId));
        if (bookings.size()>0){
            return new ResponseEntity<List<Booking>> (bookings, HttpStatus.OK);
        }
            return new ResponseEntity<String>("No bookings found for the hotel", HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/getHotelRooms")
    @ResponseBody
    public ResponseEntity<?> getHotelRooms(@RequestParam(name = "hotelId") String hotelId, @RequestParam(name = "fromData") String fromDate, @RequestParam(name = "toDate") String toDate) throws ParseException {
        List<Room> rooms = roomService.getAllAvailableRooms(Long.parseLong(hotelId));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd", Locale.ENGLISH);
        if (rooms.size()>0){
            if ((Common.isWeekend(formatter.parse(fromDate)) || Common.isHoliday(formatter.parse(fromDate))) || (Common.isWeekend(formatter.parse(toDate)) || Common.isHoliday(formatter.parse(toDate)))){
                for (Room i: rooms){
                    i.setRoomPrice((i.getRoomPrice()*Common.PRICEINFLATION)+i.getRoomPrice());

                }
            }
            return new ResponseEntity<List<Room>> (rooms, HttpStatus.OK);
        }
        return new ResponseEntity<String>("No room available", HttpStatus.OK);
    }
}
