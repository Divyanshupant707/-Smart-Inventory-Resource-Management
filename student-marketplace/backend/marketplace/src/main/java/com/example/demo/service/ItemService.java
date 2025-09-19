package com.example.demo.service;

import com.example.demo.model.Item;
import com.example.demo.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }



    public Item createItem(Item item) {
        if (item.getTitle() == null || item.getTitle().isEmpty() || item.getPrice() == null) {
            throw new IllegalArgumentException("Title and price cannot be null or empty.");
        }
        return itemRepository.save(item);
    }
}