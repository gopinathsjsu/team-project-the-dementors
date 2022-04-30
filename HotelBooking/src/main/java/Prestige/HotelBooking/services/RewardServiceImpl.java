package Prestige.HotelBooking.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import Prestige.HotelBooking.dao.CustomerRepository;
import Prestige.HotelBooking.dao.RewardRepository;
import Prestige.HotelBooking.entities.Customer;
import Prestige.HotelBooking.entities.CustomerRewards;
import Prestige.HotelBooking.modals.RewardDTO;

@Service
public class RewardServiceImpl {	
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private RewardRepository rewardRepository;
	
	public CustomerRewards saveCustomerRewards(RewardDTO rewardDTO) {
		Customer customer = customerRepository.findById(rewardDTO.getCustomerId());
		
		CustomerRewards customerRewards = new CustomerRewards();
		customerRewards.setReward(rewardDTO.getReward());
		customerRewards.setCustomer(customer);
		return rewardRepository.save(customerRewards);
	}
	
	public void deleteReward(long customerRewardsId) {
		rewardRepository.deleteRewards(customerRewardsId);
	}
}
