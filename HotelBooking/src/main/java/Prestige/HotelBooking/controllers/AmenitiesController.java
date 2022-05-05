package Prestige.HotelBooking.controllers;

import Prestige.HotelBooking.commons.Amenity;
import Prestige.HotelBooking.commons.Common;
import Prestige.HotelBooking.entities.Amenities;
import Prestige.HotelBooking.services.AmenitiesServiceImpl;
import Prestige.HotelBooking.services.RoomServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.temporal.ChronoUnit;
import java.time.temporal.Temporal;
import java.util.Date;
import java.util.List;

@RestController
public class AmenitiesController {

    @Autowired
    private AmenitiesServiceImpl amenitiesService;

    @Autowired
    private RoomServiceImpl roomService;

    @GetMapping("/getAmenities")
    @ResponseBody
    public ResponseEntity<?> getAmenities(@RequestParam(required = false, name = "hotel") long hotelId, @RequestParam(required = false, name = "room") long roomId){
          if (hotelId!=0 && roomId!=0){
              List<String> amenities = amenitiesService.findRoomAmenityList(hotelId,roomId);
              if (amenities.size()>0){
                  return new ResponseEntity<List<String>> (amenities, HttpStatus.OK);

              }else{
                  return new ResponseEntity<String>("No amenities found for the room " , HttpStatus.BAD_REQUEST);
              }
          }else if (hotelId!=0){
              List<String> amenities = amenitiesService.findHotelAmenity(hotelId);
              if (amenities.size()>0){
                  return new ResponseEntity<List<String>> (amenities, HttpStatus.OK);

              }else{
                  return new ResponseEntity<String>("No amenities found for the hotel " , HttpStatus.BAD_REQUEST);
              }

          }
          return new ResponseEntity<String>("No amenities found for the hotel " , HttpStatus.BAD_REQUEST);
    }
    @GetMapping("/getAmenitiesPrice")
    @ResponseBody
    public ResponseEntity<?> getAmenitiesPrice(@RequestParam(name = "hotel") long hotelId, @RequestParam(name = "room")long roomId, @RequestParam(name = "fromDate") Date fromDate,@RequestParam(name = "toDate") Date toDate, @RequestParam(name = "amenities") List<String> am){
        Amenities allAmenities = amenitiesService.findRoomAmenity(hotelId,roomId);
        if (am.size()>0){
            Float price  = roomService.getRoomDetails(roomId).getRoomPrice();
            Float amenitiesPrice = Float.valueOf(0);
            for (String i : am){
                switch (Amenity.valueOf(i)){
                    case BREAKFAST: amenitiesPrice = amenitiesPrice+allAmenities.getBreakfast();
                                    break;
                    case GYM: amenitiesPrice = amenitiesPrice+allAmenities.getGym();
                        break;
                    case MEALS: amenitiesPrice = amenitiesPrice+allAmenities.getMeals();
                        break;
                    case JACCUZI: amenitiesPrice = amenitiesPrice+allAmenities.getJacuzzi();
                        break;
                    case PARKING: amenitiesPrice = amenitiesPrice+allAmenities.getParking();
                        break;
                    case SWIMMINGPOOL: amenitiesPrice = amenitiesPrice+allAmenities.getSwimmingPool();
                        break;
                }
            }
            if ((Common.isWeekend(fromDate) || Common.isHoliday(fromDate)) || (Common.isWeekend(toDate) || Common.isHoliday(toDate))){
                price *= Common.PRICEINFLATION* ChronoUnit.DAYS.between((Temporal) fromDate, (Temporal) toDate);
            }else{
                price *= ChronoUnit.DAYS.between((Temporal) fromDate, (Temporal) toDate);

            }
            Float totalPrice = price + amenitiesPrice;

            return new ResponseEntity<Float> (totalPrice, HttpStatus.OK);

        }else{
            return new ResponseEntity<String>("Error calculating the price " , HttpStatus.BAD_REQUEST);
        }
    }


}
