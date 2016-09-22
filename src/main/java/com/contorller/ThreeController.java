package com.contorller;

import com.alibaba.fastjson.JSONArray;
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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2016/8/26.
 */
@Controller
public class ThreeController {

    @RequestMapping(value = "three",method = RequestMethod.GET )
    public ModelAndView three(){
        return new ModelAndView("three");
    }

    @RequestMapping(value = "getthree",method = RequestMethod.GET )
    @ResponseBody
    public String getthree(){
        String tree = "[{\n" +
                "  \"id\":1,\n" +
                "  \"text\":\"report\",\n" +
                "  \"children\":[{\n" +
                "  \"text\":\"jsonbargraph\",\n" +
                "   \"url\":\"jsonbargraph\"\n" +
                "  }," +
                "{" +
                   "\"text\":\"jsonlinegraph\",\n" +
                   "\"url\":\"jsonlinegraph\"\n" +
                   "}"+
                "]}]";
        return tree;
    }

    @RequestMapping(value = "jsonbargraph",method = RequestMethod.POST )
    @ResponseBody
    public String jsonbargraph(HttpServletRequest request, HttpServletResponse response){
        String[] categories = {"鞋", "衬衫", "外套", "牛仔裤"};
        Integer[] values = {80, 50, 75, 100};
        Map<String, Object> json = new HashMap<String, Object>();
        json.put("id","bar");
        json.put("categories", categories);
        json.put("values", values);
        Object jsonout = JSONArray.toJSON(json);
        String  ss =  jsonout.toString();
        return ss;
    }

    public List packageData(){
        List list  = new ArrayList();
        list.add(15);
        list.add(-50);
        list.add(-56.5);
        list.add(-46.5);
        list.add(-22.1);
        list.add(-2.5);
        list.add(-27.7);
        list.add(-55.7);
        list.add(-76.5);
        return list;
    }

    public List packageZong(){
        List list  = new ArrayList();
        list.add("0");
        list.add("15");
        list.add("25");
        list.add("35");
        list.add("45");
        list.add("50");
        list.add("60");
        list.add("70");
        list.add("80");
        return list;
    }
    @RequestMapping(value = "jsonlinegraph",method = RequestMethod.POST )
    @ResponseBody
    public String jsonlinegraph(HttpServletRequest request, HttpServletResponse response){
        Map<String, Object> json = new HashMap<String, Object>();
        List pd = packageData();
        List pz = packageZong();
        json.put("id","line");
        json.put("data", pd);
        json.put("zong",pz);
        Object jsonout = JSONArray.toJSON(json);
        return jsonout.toString();
    }


}
