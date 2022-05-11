package Prestige.HotelBooking.commons;

import Prestige.HotelBooking.entities.CustomerRewards;
import Prestige.HotelBooking.services.RewardServiceImpl;
import com.github.agogs.holidayapi.api.APIConsumer;
import com.github.agogs.holidayapi.api.impl.HolidayAPIConsumer;
import com.github.agogs.holidayapi.model.Holiday;
import com.github.agogs.holidayapi.model.HolidayAPIResponse;
import com.github.agogs.holidayapi.model.QueryParams;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import Prestige.HotelBooking.services.RewardServiceImpl;


public class Common {

   // @Autowired
   // private static RewardServiceImpl rewardService;
    public static final float PRICEINFLATION = (float) 0.1;
    public static boolean isWeekend(final Date d)
    {
        Calendar cal = Calendar.getInstance();
        cal.setTime(d);

        int day = cal.get(Calendar.DAY_OF_WEEK);
        return day == Calendar.SATURDAY || day == Calendar.SUNDAY;
    }

    public static boolean isHoliday(final Date d)
    {
        //create a consumer
        APIConsumer consumer = new HolidayAPIConsumer("https://holidayapi.com/v1/holidays");

        //generate the wuery parameters
        QueryParams params = new QueryParams();
        params.key("86f5ef2f-a7fb-4fc8-8108-4e1863d2b8cd")
                .month(d.getMonth())
                .country(QueryParams.Country.UNITED_STATES)
                .year(d.getYear())
                //JSON is the default format
                .format(QueryParams.Format.XML)
                .pretty(true);

        try {
            //make the API call
            HolidayAPIResponse response = consumer.getHolidays(params);

            //check the status code of the API call
            int status = response.getStatus();
            if (status != 200) {
                 return false;

            } else {

                List<Holiday> holidays = response.getHolidays();
                for (Holiday h : holidays) {
                   if  (h.getDate().equals(d.toString())) {
                       return true;
                   }
                }
            }
        } catch (IOException e) {
            return false;
        }
        return false;
    }


}
