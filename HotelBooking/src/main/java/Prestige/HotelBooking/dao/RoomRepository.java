package Prestige.HotelBooking.dao;

import Prestige.HotelBooking.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Integer> {
    @Query(value = "Select * from room WHERE hotel_id=:hotelId", nativeQuery = true)
    List<Room> findByHotel(@Param("hotelId") long hotelId);

    @Query(value = "Select * from room WHERE room_id=:roomId", nativeQuery = true)
    Room getRoomDetails(@Param("roomId") long roomId);

    @Query(value = "Select * from room WHERE hotel_id=:hotelId AND is_available=TRUE", nativeQuery = true)
    List<Room> getAvailableRoomDetails(@Param("hotelId") long hotelId);

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "UPDATE room SET number_of_available_rooms=:num WHERE hotel_id=:hotelId AND room_id=:roomId", nativeQuery = true)
    void updateNumberOfAvailableRooms(@Param("num") int num, @Param("hotelId") long hotelId,@Param("roomId") long roomId);

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "UPDATE room SET is_available=:value WHERE hotel_id=:hotelId AND room_id=:roomId", nativeQuery = true)
    void updateIsAvailable(@Param("value") boolean value, @Param("hotelId") long hotelId,@Param("roomId") long roomId);

}
