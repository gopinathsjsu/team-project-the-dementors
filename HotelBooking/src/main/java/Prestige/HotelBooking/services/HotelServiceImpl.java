package Prestige.HotelBooking.services;

import Prestige.HotelBooking.dao.HotelRepository;
import Prestige.HotelBooking.entities.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelServiceImpl {
    @Autowired
    private HotelRepository hotelRepository;

    public List<Hotel> findHotelByCity(String city){
        List<Hotel> hotels = hotelRepository.findByCity(city);
        return hotels;
    }

    public List<Hotel> findHotelByState(String state){
        List<Hotel> hotels = hotelRepository.findByState(state);
        return hotels;
    }

    public List<Hotel> getAllHotels(){
        List<Hotel> hotels = hotelRepository.findAll();
        return hotels;
    }


}
