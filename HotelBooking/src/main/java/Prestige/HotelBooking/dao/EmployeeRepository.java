package Prestige.HotelBooking.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Prestige.HotelBooking.entities.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
  
}
