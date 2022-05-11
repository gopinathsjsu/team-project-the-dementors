package Prestige.HotelBooking.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Prestige.HotelBooking.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query(value = "Select * from user WHERE email=:username and password=:password", nativeQuery = true)
	User findByUserName(@Param("username") String username, @Param("password") String password);
	
	@Query(value = "Select * from user WHERE user_id=:userId", nativeQuery = true)
	User findByUserId(@Param("userId") long username);

	
}
