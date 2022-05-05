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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class HotelController {

    @Autowired
    private HotelServiceImpl hotelService;

    @Autowired
    private BookingServiceImpl bookingService;

    @Autowired
    private RoomServiceImpl roomService;

    @GetMapping("/getHotels")
    @ResponseBody
    public ResponseEntity<?> fetchHotels(@RequestParam(required = false, name = "city") String cityName, @RequestParam(required = false, name = "state") String stateName){
        if (!cityName.isEmpty()){
           List<Hotel> hotels =  hotelService.findHotelByCity(cityName);
           if (hotels.size()>0){
                return new ResponseEntity<List<Hotel>> (hotels, HttpStatus.OK);
            }else{
               return new ResponseEntity<String>("No hotels found in the city " + cityName, HttpStatus.BAD_REQUEST);
           }
        }else if  (!stateName.isEmpty()){
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

    @GetMapping("/getHotelBooking")
    @ResponseBody
    public ResponseEntity<?> getHotelBookings(@RequestParam(name = "hotelId") long hotelId){
        List<Booking> bookings = bookingService.getAllHotelBooking(hotelId);
        if (bookings.size()>0){
            return new ResponseEntity<List<Booking>> (bookings, HttpStatus.OK);
        }
            return new ResponseEntity<String>("No bookings found for the hotel", HttpStatus.OK);
    }

    @GetMapping("/getHotelRooms")
    @ResponseBody
    public ResponseEntity<?> getHotelRooms(@RequestParam(name = "hotelId") long hotelId, @RequestParam(name = "fromData") Date fromDate, @RequestParam(name = "toDate") Date toDate){
        List<Room> rooms = roomService.getAllAvailableRooms(hotelId);
        if (rooms.size()>0){
            if ((Common.isWeekend(fromDate) || Common.isHoliday(fromDate)) || (Common.isWeekend(toDate) || Common.isHoliday(toDate))){
                for (Room i: rooms){
                    i.setRoomPrice(i.getRoomPrice()*Common.PRICEINFLATION);

                }
            }
            return new ResponseEntity<List<Room>> (rooms, HttpStatus.OK);
        }
        return new ResponseEntity<String>("No room available", HttpStatus.OK);
    }
}
