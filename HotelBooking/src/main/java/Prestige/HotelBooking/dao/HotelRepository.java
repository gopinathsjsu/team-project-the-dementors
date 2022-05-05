package Prestige.HotelBooking.dao;

import Prestige.HotelBooking.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface HotelRepository extends JpaRepository<Hotel, Integer> {
    @Query(value = "Select * from hotel WHERE hotelCity=:city", nativeQuery = true)
    List<Hotel> findByCity(@Param("city") String hotelCity);

    @Query(value = "Select * from hotel WHERE hotelState=:state", nativeQuery = true)
    List<Hotel> findByState(@Param("state") String hotelState);


}
