package Prestige.HotelBooking.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Prestige.HotelBooking.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	
	@Query(value = "Select * from customer WHERE customer_id=:customerId", nativeQuery = true)
	Customer findById(@Param("customerId") long customerId);
}
