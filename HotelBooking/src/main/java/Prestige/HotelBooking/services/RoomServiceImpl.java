package Prestige.HotelBooking.services;

import Prestige.HotelBooking.dao.RoomRepository;
import Prestige.HotelBooking.entities.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl {

    @Autowired
    private RoomRepository roomRepository;

    public Room getRoomDetails(long roomId){
        Room room = roomRepository.getRoomDetails(roomId);
        return room;
    }

    public List<Room> getAllRooms(long hotelId){
        List<Room> rooms = roomRepository.findByHotel(hotelId);
        return rooms;
    }

    public List<Room> getAllAvailableRooms(long hotelId){
        List<Room> rooms = roomRepository.getAvailableRoomDetails(hotelId);
        return rooms;
    }

    public void updateAvailableRooms(long hotelId, long roomId, int numberOfRooms){
         roomRepository.updateNumberOfAvailableRooms(numberOfRooms,hotelId,roomId);
    }

    public void updateIsAvailable(boolean value, long roomId, long hotelId){
         roomRepository.updateIsAvailable(value,hotelId,roomId);
    }

}
