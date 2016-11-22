package com.touchnmath.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test")
public class TestController {
  
  @RequestMapping("/testCall")
  private Object testCall() {
    Map<String, Object> result = new HashMap<String, Object>();
    result.put("data", "success");
    return result;
  }

}
