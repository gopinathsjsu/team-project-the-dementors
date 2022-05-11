package Prestige.HotelBooking.controllers;

import Prestige.HotelBooking.commons.Amenity;
import Prestige.HotelBooking.commons.Common;
import Prestige.HotelBooking.entities.Amenities;
import Prestige.HotelBooking.services.AmenitiesServiceImpl;
import Prestige.HotelBooking.services.RoomServiceImpl;
import com.sun.net.httpserver.Headers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.temporal.ChronoUnit;
import java.time.temporal.Temporal;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.concurrent.TimeUnit;

import static Prestige.HotelBooking.commons.Amenity.getEnum;

@RestController
public class AmenitiesController {

    @Autowired
    private AmenitiesServiceImpl amenitiesService;

    @Autowired
    private RoomServiceImpl roomService;

    @CrossOrigin(origins = "*")
    @GetMapping("/getAmenities")
    @ResponseBody
    public ResponseEntity<?> getAmenities(@RequestParam(required = false, name = "hotelId") String hotelId, @RequestParam(required = false, name = "roomId") String roomId){
        long hId=0,rId=0;
        if (hotelId!=null){
             hId = Long.parseLong(hotelId);
        }
        if (roomId!=null) {
            rId = Long.parseLong(roomId);
        }

//          if (hId!=0 && rId!=0){
//              List<String> amenities = amenitiesService.findRoomAmenityList(hId,rId);
//              if (amenities.size()>0){
//                  return new ResponseEntity<List<String>> (amenities, HttpStatus.OK);
//
//              }else{
//                  return new ResponseEntity<String>("No amenities found for the room " , HttpStatus.BAD_REQUEST);
//              }
//          }else
         if (hId!=0){
              List<String> amenities = amenitiesService.findHotelAmenity(hId);
              if (amenities.size()>0){
                  return new ResponseEntity<List<String>> (amenities, HttpStatus.OK);

              }else{
                  return new ResponseEntity<String>("No amenities found for the hotel " , HttpStatus.BAD_REQUEST);
              }

          }
          return new ResponseEntity<String>("No amenities found for the hotel " , HttpStatus.BAD_REQUEST);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/getAmenitiesPrice")
    @ResponseBody
    public ResponseEntity<?> getAmenitiesPrice(@RequestParam(name = "hotelId") String hotelId, @RequestParam(required=false, name = "roomId")String roomId, @RequestParam(name = "fromDate") String fromDate,@RequestParam(name = "toDate") String toDate, @RequestParam(name = "amenities") List<String> am) throws ParseException {
        long hId=0,rId=0;
        if (hotelId!=null){
            hId = Long.parseLong(hotelId);
        }
        if (roomId!=null) {
            rId = Long.parseLong(roomId);
        }
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-mm-dd", Locale.ENGLISH);
        Date fDate = formatter.parse(fromDate);
        Date tDate = formatter.parse(toDate);
        Amenities allAmenities = amenitiesService.findHotelAmenityPrice(hId);
        if (am.size()>0){
            Float price  = roomService.getRoomDetails(rId).getRoomPrice();
            Float amenitiesPrice = Float.valueOf(0);
            for (String i : am){
                switch (getEnum(i)){
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
            long diffInMillies = Math.abs(tDate.getTime() - fDate.getTime());
            long diff = TimeUnit.DAYS.convert(diffInMillies, TimeUnit.MILLISECONDS);
            if ((Common.isWeekend(formatter.parse(fromDate)) || Common.isHoliday(formatter.parse(fromDate))) || (Common.isWeekend(formatter.parse(toDate)) || Common.isHoliday(formatter.parse(toDate)))){
                //price *= Common.PRICEINFLATION* ChronoUnit.DAYS.between((Temporal) formatter.parse(fromDate), (Temporal) formatter.parse(toDate));
                price = ((price*Common.PRICEINFLATION)+price)* diff;
            }else{
                //price *= ChronoUnit.DAYS.between((Temporal) formatter.parse(fromDate), (Temporal) formatter.parse(toDate));
                price = price*diff;

            }
            Float totalPrice = price + amenitiesPrice;

            return new ResponseEntity<Float> (totalPrice, HttpStatus.OK);

        }else{
            return new ResponseEntity<String>("Error calculating the price " , HttpStatus.BAD_REQUEST);
        }
    }



}
