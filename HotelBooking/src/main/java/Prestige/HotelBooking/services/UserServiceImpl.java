package Prestige.HotelBooking.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Prestige.HotelBooking.dao.UserRepository;
import Prestige.HotelBooking.entities.User;
import Prestige.HotelBooking.modals.UserDTO;
import Prestige.HotelBooking.modals.UserRegisterDTO;

@Service
public class UserServiceImpl {

	@Autowired
    private UserRepository userRepository;

	public User findByUserName(UserDTO userDTO) {
		return userRepository.findByUserName(userDTO.getEmail(), userDTO.getPassword());
	}
	
	public User findByUserId(long userId) {
		return userRepository.findByUserId(userId);
	}
	
	public User registerUser(UserRegisterDTO userRegisterDTO) {
		User user = new User();
		user.setEmail(userRegisterDTO.getEmail());
		user.setPassword(userRegisterDTO.getPassword());
		user.setUserRole(userRegisterDTO.getUserRole());
		return userRepository.save(user);
	}
	
}
