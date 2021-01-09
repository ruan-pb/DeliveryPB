package Delivery.devPB.controller;


import java.net.URI;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import Delivery.devPB.dto.OrderDTO;
import Delivery.devPB.services.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {

	
	@Autowired
	private OrderService orderService;
	
	
	
	@GetMapping
	public ResponseEntity<List<OrderDTO>> findAll(){
		List<OrderDTO>list = orderService.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<OrderDTO>insert(@RequestBody OrderDTO orderDTO){
		orderDTO = orderService.insert(orderDTO);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(orderDTO.getId()).toUri();
		return ResponseEntity.created(uri).body(orderDTO);
		
		
	}
	
	@PutMapping("/{id}/delivered")
	public ResponseEntity<OrderDTO> setDelivered(@PathVariable Long id){
		OrderDTO dto = orderService.setDelivered(id);
		return ResponseEntity.ok().body(dto);
	}
}
