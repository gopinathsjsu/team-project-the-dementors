package Prestige.HotelBooking.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Prestige.HotelBooking.dao.CustomerRepository;
import Prestige.HotelBooking.entities.Customer;
import Prestige.HotelBooking.entities.User;
import Prestige.HotelBooking.modals.CustomerDTO;

@Service
public class CustomerServiceImpl {

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private UserServiceImpl userServiceImpl;

	public Customer saveCustomer(CustomerDTO customerDTO) {
		User user = userServiceImpl.findByUserId(customerDTO.getUserId());
		Customer customer = new Customer();
		customer.setUser(user);
		customer.setFirstName(customerDTO.getFirstName());
		customer.setLastName(customerDTO.getLastName());
		customer.setEmailId(customerDTO.getEmailId());
		return customerRepository.save(customer);
	}

	public Customer updateCustomer(CustomerDTO customerDTO, long customerId) {
		Customer customer = customerRepository.findById(customerId);
		User user = userServiceImpl.findByUserId(customerDTO.getUserId());
		if (customer != null) {
			customer.setUser(user);
			customer.setFirstName(customerDTO.getFirstName());
			customer.setLastName(customerDTO.getLastName());
			customer.setEmailId(customerDTO.getEmailId());
			return customerRepository.save(customer);
		}
		return customer;

	}
	
	public List<Customer> getCustomers() {		
		return customerRepository.findAll();
	}
}
