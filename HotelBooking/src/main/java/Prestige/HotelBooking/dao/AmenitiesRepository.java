package Prestige.HotelBooking.dao;

import Prestige.HotelBooking.entities.Amenities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AmenitiesRepository extends JpaRepository<Amenities, Integer> {
    @Query(value = "Select * from amenities WHERE hotel_id=:hotelId", nativeQuery = true)
    Amenities findByHotel(@Param("hotelId") long hotelId);

    @Query(value = "Select * from amenities WHERE hotel_id=:hotelId AND room_id=:roomId", nativeQuery = true)
    Amenities findByRoom(@Param("hotelId") long hotelId , @Param("roomId") long roomId);

    @Query(value = "Select * from amenities WHERE amenities_id=:amenitiesId", nativeQuery = true)
    Amenities findById(@Param("amenitiesId") long amenitiesId);
}
