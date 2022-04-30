package Prestige.HotelBooking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Prestige.HotelBooking.entities.Employee;
import Prestige.HotelBooking.modals.EmployeeDTO;
import Prestige.HotelBooking.services.EmployeeServiceImpl;

@RestController
public class EmployeeController {

	@Autowired
	private EmployeeServiceImpl employeeServiceImpl;

	@PostMapping("/saveEmployee")
    public ResponseEntity<?> saveEmployee(@RequestBody EmployeeDTO employeeDTO){
        
        Employee employee = employeeServiceImpl.saveEmployee(employeeDTO);
        
        if(employee != null) {
        	return new ResponseEntity<Employee> (employee, HttpStatus.OK);
        }
        return new ResponseEntity<String>("Bad Request", HttpStatus.BAD_REQUEST);
    }
}
