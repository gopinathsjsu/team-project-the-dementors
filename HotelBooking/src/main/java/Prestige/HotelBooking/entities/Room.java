package Prestige.HotelBooking.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@Table(name = "room")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "roomId")
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long roomId;
    private int roomNo;
    private String roomType;
    private float roomPrice;
    private boolean isAvailable;
    private int numberOfAvailableRooms;

    @OneToOne
    @JoinColumn(name="hotel_id", referencedColumnName = "hotelId")
    private Hotel hotel;

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    public long getRoomId() {
        return roomId;
    }

    public void setRoomId(long roomId) {
        this.roomId = roomId;
    }

    public int getRoomNo() {
        return roomNo;
    }

    public void setRoomNo(int roomNo) {
        this.roomNo = roomNo;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public float getRoomPrice() {
        return roomPrice;
    }

    public void setRoomPrice(float roomPrice) {
        this.roomPrice = roomPrice;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    public int getNumberOfAvailableRooms() {
        return numberOfAvailableRooms;
    }

    public void setNumberOfAvailableRooms(int numberOfAvailableRooms) {
        this.numberOfAvailableRooms = numberOfAvailableRooms;
    }
}