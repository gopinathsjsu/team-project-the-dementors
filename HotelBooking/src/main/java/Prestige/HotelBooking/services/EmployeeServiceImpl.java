package Prestige.HotelBooking.services;

import Prestige.HotelBooking.dao.EmployeeRepository;
import Prestige.HotelBooking.entities.Employee;
import Prestige.HotelBooking.entities.User;
import Prestige.HotelBooking.modals.EmployeeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl {

	@Autowired
	private UserServiceImpl userServiceImpl;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	public Employee saveEmployee(EmployeeDTO employeeDTO) {
		User user = userServiceImpl.findByUserId(employeeDTO.getUserId());
		Employee employee = new Employee();
		employee.setEmployeeAge(employeeDTO.getEmployeeAge());
		employee.setEmployeeEmail(employeeDTO.getEmployeeEmail());
		employee.setUser(user);
		return employeeRepository.save(employee);
	}
}
