package Prestige.HotelBooking.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@Table(name = "amenities")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "amenitiesId")


public class Amenities {
    private float breakfast;
    private float parking;
    private float gym;
    private float swimmingPool;
    private float meals;
    private float includeEverything;
    private float jacuzzi;

    @ManyToOne
    @JoinColumn(name="cust_id", referencedColumnName = "customerId")
    private Customer customer;

	@ManyToOne
    @JoinColumn(name="hotel_id", referencedColumnName = "hotelId")
    private Hotel hotel;


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long amenitiesId;

    public void setId(Long id) {
        this.amenitiesId = id;
    }

    public Long getId() {
        return amenitiesId;
    }


    public float getBreakfast() {
        return breakfast;
    }

    public void setBreakfast(float breakfast) {
        this.breakfast = breakfast;
    }

    public float getParking() {
        return parking;
    }

    public void setParking(float parking) {
        this.parking = parking;
    }

    public float getGym() {
        return gym;
    }

    public void setGym(float gym) {
        this.gym = gym;
    }

    public float getSwimmingPool() {
        return swimmingPool;
    }

    public void setSwimmingPool(float swimmingPool) {
        this.swimmingPool = swimmingPool;
    }

    public float getMeals() {
        return meals;
    }

    public void setMeals(float meals) {
        this.meals = meals;
    }

    public float getIncludeEverything() {
        return includeEverything;
    }

    public void setIncludeEverything(float includeEverything) {
        this.includeEverything = includeEverything;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }


    public Long getAmenitiesId() {
        return amenitiesId;
    }

    public void setAmenitiesId(Long amenitiesId) {
        this.amenitiesId = amenitiesId;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }


    public float getJacuzzi() {
        return jacuzzi;
    }

    public void setJacuzzi(float jacuzzi) {
        this.jacuzzi = jacuzzi;
    }
}
