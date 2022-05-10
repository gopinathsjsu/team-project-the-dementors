package Prestige.HotelBooking.entities;


import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name = "customer")
@JsonIdentityInfo(
		   generator = ObjectIdGenerators.PropertyGenerator.class,
		   property = "customerId")
public class Customer {
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	private long customerId;

	private String firstName;
	
	private String lastName;
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	private String emailId;
	
	@OneToOne(mappedBy="customer")
	private CustomerRewards customerRewards;
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy="customer",cascade = CascadeType.ALL, orphanRemoval = true)
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Booking> booking;
	
	public CustomerRewards getCustomerRewards() {
		return customerRewards;
	}

	public void setCustomerRewards(CustomerRewards customerRewards) {
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


	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	

}
