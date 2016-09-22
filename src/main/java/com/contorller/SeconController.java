package com.contorller;


import com.github.abel533.echarts.json.GsonOption;
import com.service.IEchartsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class SeconController {

    @Autowired
    private IEchartsService echartsService;

    @RequestMapping(value = "secon",method = RequestMethod.GET )
    public ModelAndView secon(){
        return new ModelAndView("secon");
    }

    @RequestMapping(value = "getsecon",method = RequestMethod.GET )
    @ResponseBody
    public String getsecon(){
        //File file = new File("src/main/resources/tree.json");
        String tree = "[{\n" +
                "  \"id\":1,\n" +
                "  \"text\":\"report\",\n" +
                "  \"children\":[{\n" +
                "    \"text\":\"javaaccessgraph\",\n" +
                "    \"url\":\"javaaccessgraph\"\n" +
                "  },{\n" +
                "    \"text\":\"javabargraph\",\n" +
                "    \"url\":\"javabargraph\"\n" +
                "  }]}]";
        return tree;
    }

    @RequestMapping(value = "javaaccessgraph",method = RequestMethod.GET )
    @ResponseBody
    public String javaaccessgraph(HttpServletRequest request, HttpServletResponse response){
        GsonOption option = echartsService.getWeek();
        response.setContentType("text/html;charset=UTF-8");
        String ss =  option.toString();
        return ss;
    }

    @RequestMapping(value = "javabargraph",method = RequestMethod.GET )
    @ResponseBody
    public String javabargraph(HttpServletRequest request, HttpServletResponse response){
        GsonOption option = echartsService.getBar();
        response.setContentType("text/html;charset=UTF-8");
        String ss =  option.toString();
        return ss;
    }

}
