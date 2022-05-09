package Prestige.HotelBooking.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import Prestige.HotelBooking.entities.CustomerRewards;


@Repository
public interface RewardRepository extends JpaRepository<CustomerRewards, Integer> {

	@Modifying
    @Transactional
	@Query(value = "Delete from customer_rewards WHERE customer_rewards_id=:customerRewardsId", nativeQuery = true)
	void deleteRewards(@Param("customerRewardsId") long customerRewardsId);

	@Query(value = "Select * from customer_rewards WHERE cust_id=:customerRewardsId", nativeQuery = true)
	CustomerRewards getCustomerRewards(@Param("customerRewardsId") long customerRewardsId);

	@Query(value = "Update customer_rewards SET reward=:rewards WHERE customer_rewards_id=:customerRewardsId", nativeQuery = true)
	CustomerRewards updateCustomerRewards(@Param("rewards") double rewards, @Param("customerRewardsId") long customerRewardsId);


}
