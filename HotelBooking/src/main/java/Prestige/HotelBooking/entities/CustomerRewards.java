package Prestige.HotelBooking.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "customer_rewards")
@JsonIdentityInfo(
		   generator = ObjectIdGenerators.PropertyGenerator.class,
		   property = "customerRewardsId")
public class CustomerRewards {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long customerRewardsId;
	
	private String reward;
	
	@ManyToOne
    @JoinColumn(name="cust_id", referencedColumnName = "customerId")
	private Customer customer;

	public long getCustomerRewardsId() {
		return customerRewardsId;
	}

	public void setCustomerRewardsId(long customerRewardsId) {
		this.customerRewardsId = customerRewardsId;
	}

	public String getReward() {
		return reward;
	}

	public void setReward(String reward) {
		this.reward = reward;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	
}
