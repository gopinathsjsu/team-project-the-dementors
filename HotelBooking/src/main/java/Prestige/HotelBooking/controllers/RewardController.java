package Prestige.HotelBooking.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import Prestige.HotelBooking.entities.CustomerRewards;
import Prestige.HotelBooking.modals.RewardDTO;
import Prestige.HotelBooking.services.RewardServiceImpl;

@RestController
public class RewardController {

	@Autowired
	private RewardServiceImpl rewardServiceImpl;

	@CrossOrigin(origins = "*")
	@PostMapping("/saveRewards")
	public ResponseEntity<?> saveBooking(@RequestBody RewardDTO rewardDTO) {

		CustomerRewards customerRewards = rewardServiceImpl.saveCustomerRewards(rewardDTO);

		if (customerRewards != null) {
			return new ResponseEntity<CustomerRewards>(customerRewards, HttpStatus.OK);
		}
		return new ResponseEntity<String>("Bad Request", HttpStatus.BAD_REQUEST);
	}

	@CrossOrigin(origins = "*")
	@DeleteMapping("/deleteReward/{rewardId}")
	public void deleteBooking(@PathVariable Long rewardId) {

		rewardServiceImpl.deleteReward(rewardId);
	}

	@CrossOrigin(origins = "*")
	@DeleteMapping("/updateCustomerReward/{rewardId}")
	public void updateCustomerReward(@RequestParam(name = "rewards") String rewards, @RequestParam(name = "id") String id) {
		rewardServiceImpl.updateReward(Double.parseDouble(rewards),Long.parseLong(id));
	}

}
