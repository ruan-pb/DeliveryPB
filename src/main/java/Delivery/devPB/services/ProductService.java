package Delivery.devPB.services;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Delivery.devPB.dto.ProductDTO;
import Delivery.devPB.entities.Product;
import Delivery.devPB.repositories.ProductRepository;

@Service
public class ProductService {
	
	
	@Autowired
	private ProductRepository productBD;
	
	
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll(){
		List<Product>lista = productBD.findAllByOrderByNameAsc();
		return lista.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}
}
