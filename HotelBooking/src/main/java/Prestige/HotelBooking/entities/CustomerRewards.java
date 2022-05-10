package Prestige.HotelBooking.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
	
	private Double reward;

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="cust_id", referencedColumnName = "customerId")
	private Customer customer;

	public long getCustomerRewardsId() {
		return customerRewardsId;
	}

	public void setCustomerRewardsId(long customerRewardsId) {
		this.customerRewardsId = customerRewardsId;
	}


	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}


	public Double getReward() {
		return reward;
	}

	public void setReward(Double reward) {
		this.reward = reward;
	}
}
