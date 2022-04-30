package Prestige.HotelBooking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import Prestige.HotelBooking.entities.User;
import Prestige.HotelBooking.modals.UserDTO;
import Prestige.HotelBooking.modals.UserRegisterDTO;
import Prestige.HotelBooking.services.UserServiceImpl;

@RestController
public class UserController {

	@Autowired
	private UserServiceImpl userServiceImpl; 
	
	@PostMapping("/login")
    public ResponseEntity<?> validateUser(@RequestBody UserDTO userDTO){
        
        User user = userServiceImpl.findByUserName(userDTO);
        
        if(user != null) {
        	return new ResponseEntity<User> (user, HttpStatus.OK);
        }
        return new ResponseEntity<String>("User Invalid/Does not exist", HttpStatus.BAD_REQUEST);
    }
	
	@PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegisterDTO userRegisterDTO){
        
        User user = userServiceImpl.registerUser(userRegisterDTO);
        
        if(user != null) {
        	return new ResponseEntity<User> (user, HttpStatus.OK);
        }
        return new ResponseEntity<String>("User Invalid/Does not exist", HttpStatus.BAD_REQUEST);
    }
	
}
