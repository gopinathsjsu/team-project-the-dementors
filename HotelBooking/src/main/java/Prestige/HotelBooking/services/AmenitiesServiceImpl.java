package Prestige.HotelBooking.services;

import Prestige.HotelBooking.commons.Amenity;
import Prestige.HotelBooking.dao.AmenitiesRepository;
import Prestige.HotelBooking.entities.Amenities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AmenitiesServiceImpl {
    @Autowired
    private AmenitiesRepository amenitiesRepository;

    public List<String> findHotelAmenity(long hotelId){
        Amenities allAmenities = amenitiesRepository.findByHotel(hotelId);
        List<String> amenities = new ArrayList<>();
        if (allAmenities.getBreakfast() != 0){
            amenities.add(Amenity.BREAKFAST.label);
        }
        if (allAmenities.getGym() !=0){
            amenities.add(Amenity.GYM.label);
        }
        if (allAmenities.getJacuzzi() !=0){
            amenities.add(Amenity.JACCUZI.label);
        }
        if (allAmenities.getMeals() !=0){
            amenities.add(Amenity.MEALS.label);
        }
        if (allAmenities.getParking()!=0){
            amenities.add(Amenity.PARKING.label);
        }
        if (allAmenities.getSwimmingPool()!=0){
            amenities.add(Amenity.SWIMMINGPOOL.label);
        }
        return amenities;
    }

    public List<String> findRoomAmenityList(long hotelId, long roomId){
        Amenities allAmenities = amenitiesRepository.findByRoom(hotelId,roomId);
        List<String> amenities = new ArrayList<>();
        if (allAmenities.getBreakfast() != 0){
            amenities.add(Amenity.BREAKFAST.label);
        }
        if (allAmenities.getGym() !=0){
            amenities.add(Amenity.GYM.label);
        }
        if (allAmenities.getJacuzzi() !=0){
            amenities.add(Amenity.JACCUZI.label);
        }
        if (allAmenities.getMeals() !=0){
            amenities.add(Amenity.MEALS.label);
        }
        if (allAmenities.getParking()!=0){
            amenities.add(Amenity.PARKING.label);
        }
        if (allAmenities.getSwimmingPool()!=0){
            amenities.add(Amenity.SWIMMINGPOOL.label);
        }
        return amenities;
    }

    public Amenities findRoomAmenity(long hotelId, long roomId){
        Amenities allAmenities = amenitiesRepository.findByRoom(hotelId,roomId);
        return allAmenities;
    }
}
