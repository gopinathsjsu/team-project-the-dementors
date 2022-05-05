package Prestige.HotelBooking.dao;

import Prestige.HotelBooking.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Integer> {
    @Query(value = "Select * from room WHERE hotel_id=:hotelId", nativeQuery = true)
    List<Room> findByHotel(@Param("hotelId") long hotelId);

    @Query(value = "Select * from room WHERE roomId=:roomId", nativeQuery = true)
    Room getRoomDetails(@Param("roomId") long roomId);

    @Query(value = "Select * from room WHERE hotel_id=:hotelId AND isAvailable=:true", nativeQuery = true)
    List<Room> getAvailableRoomDetails(@Param("hotelId") long hotelId);

    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE room SET numberOfAvailableRooms=:num WHERE hotel_id=:hotelId AND roomId=:roomId", nativeQuery = true)
    int updateNumberOfAvailableRooms(@Param("num") int numberOfAvailableRooms, @Param("hotelId") long hotelId,@Param("roomId") long roomId);

    @Modifying(clearAutomatically = true)
    @Query(value = "UPDATE room SET isAvailable=:value WHERE hotel_id=:hotelId AND roomId=:roomId", nativeQuery = true)
    int updateIsAvailable(@Param("value") boolean isAvailable, @Param("hotelId") long hotelId,@Param("roomId") long roomId);

}
