package Prestige.HotelBooking.entities;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "customer")
@JsonIdentityInfo(
		   generator = ObjectIdGenerators.PropertyGenerator.class,
		   property = "customerId")
public class Customer {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long customerId;
	
	private String customerName;
	
	private int customerAge;
	
	@OneToMany(mappedBy="customer")
	private List<CustomerRewards> customerRewards;
	
	@OneToMany(mappedBy="customer")
	private List<Booking> booking;
	
	public List<CustomerRewards> getCustomerRewards() {
		return customerRewards;
	}

	public void setCustomerRewards(List<CustomerRewards> customerRewards) {
		this.customerRewards = customerRewards;
	}

	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cust_user_id", referencedColumnName = "userId")
	private User user;
	

	public List<Booking> getBooking() {
		return booking;
	}

	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}

	public long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public int getCustomerAge() {
		return customerAge;
	}

	public void setCustomerAge(int customerAge) {
		this.customerAge = customerAge;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	

}
