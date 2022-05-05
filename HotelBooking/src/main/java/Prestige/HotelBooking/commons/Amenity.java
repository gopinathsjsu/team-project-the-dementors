package Prestige.HotelBooking.commons;

public enum Amenity {
    BREAKFAST("Continental Breakfast"),
    GYM("Fitness Room"),
    SWIMMINGPOOL("Swimming Pool"),
    JACCUZI("Jacuzzi"),
    PARKING("Daily Parking"),
    MEALS("All meals");

    public final String label;
    private Amenity(String label) {
        this.label = label;
    }
    public static Amenity getEnum(String label) {
        switch (label){
            case "Continental Breakfast": return BREAKFAST;
            case "Fitness Room": return GYM;
            case "Swimming Pool": return SWIMMINGPOOL;
            case "Jacuzzi": return JACCUZI;
            case "Daily Parking": return PARKING;
            case "All meals": return MEALS;
        }
        return null;
    }
}
