package Prestige.HotelBooking.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "hotel")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "hotelId")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long hotelId;

    private String hotelName;
    private String hotelType;
    private String hotelStreet;
    private String hotelCity;
    private String hotelState;
    private String hotelCountry;
    private int hotelZipCode;
    private float startingPrice;
    private String image;

    @OneToMany(mappedBy="hotel")
    private List<Booking> booking;
    
    public List<Booking> getBooking() {
		return booking;
	}

	public void setBooking(List<Booking> booking) {
		this.booking = booking;
	}

	public long getHotelId() {
        return hotelId;
    }

    public void setHotelId(long hotelId) {
        this.hotelId = hotelId;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getHotelType() {
        return hotelType;
    }

    public void setHotelType(String hotelType) {
        this.hotelType = hotelType;
    }

    public String getHotelStreet() {
        return hotelStreet;
    }

    public void setHotelStreet(String hotelStreet) {
        this.hotelStreet = hotelStreet;
    }

    public String getHotelCity() {
        return hotelCity;
    }

    public void setHotelCity(String hotelCity) {
        this.hotelCity = hotelCity;
    }

    public String getHotelState() {
        return hotelState;
    }

    public void setHotelState(String hotelState) {
        this.hotelState = hotelState;
    }

    public String getHotelCountry() {
        return hotelCountry;
    }

    public void setHotelCountry(String hotelCountry) {
        this.hotelCountry = hotelCountry;
    }

    public int getHotelZipCode() {
        return hotelZipCode;
    }

    public void setHotelZipCode(int hotelZipCode) {
        this.hotelZipCode = hotelZipCode;
    }

    public float getStartingPrice() {
        return startingPrice;
    }

    public void setStartingPrice(float startingPrice) {
        this.startingPrice = startingPrice;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
