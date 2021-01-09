package Delivery.devPB.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import Delivery.devPB.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
	//List<Order>findAllByOrderByNameAsc();
	
	
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List<Order> findOrdersWithProducts();
}
