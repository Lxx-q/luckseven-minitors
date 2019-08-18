/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package king.application.web.spring.boot.luckseven.minitors.controller;

import king.application.web.spring.boot.luckseven.minitors.service.ApplicationService;
import king.application.web.spring.boot.luckseven.minitors.service.feign.CalculatorFeignClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author king
 */
@RequestMapping("test")
@RestController
public class TestController {
    
    @Autowired
    private CalculatorFeignClient calculator;
    
    @Autowired
    private ApplicationService application;
    
    
}
