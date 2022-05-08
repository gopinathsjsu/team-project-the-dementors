package Prestige.HotelBooking.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Prestige.HotelBooking.entities.Customer;
import Prestige.HotelBooking.modals.CustomerDTO;
import Prestige.HotelBooking.services.CustomerServiceImpl;

@RestController
public class CustomerController {
	
	@Autowired
	private CustomerServiceImpl customerServiceImpl;

	@PostMapping("/saveCustomer")
    public ResponseEntity<?> saveCustomer(@RequestBody CustomerDTO customerDTO){
        
        Customer customer = customerServiceImpl.saveCustomer(customerDTO);
        
        if(customer != null) {
        	return new ResponseEntity<Customer> (customer, HttpStatus.OK);
        }
        return new ResponseEntity<String>("Bad Request", HttpStatus.BAD_REQUEST);
    }
	
	@PutMapping("/updateCustomer/{customerId}")
    public ResponseEntity<?> updateCustomer(@RequestBody CustomerDTO customerDTO, @PathVariable Long customerId){
        
        Customer customer = customerServiceImpl.updateCustomer(customerDTO, customerId);
        
        if(customer != null) {
        	return new ResponseEntity<Customer> (customer, HttpStatus.OK);
        }
        return new ResponseEntity<String>("Bad Request", HttpStatus.BAD_REQUEST);
    }
	
	@GetMapping("/getAllCustomers")
    public ResponseEntity<?> getCustomers(){
        
        List<Customer> customer = customerServiceImpl.getCustomers();
        
        if(customer != null) {
        	return new ResponseEntity<List<Customer>> (customer, HttpStatus.OK);
        }
        return new ResponseEntity<String>("Bad Request", HttpStatus.BAD_REQUEST);
    }
}
