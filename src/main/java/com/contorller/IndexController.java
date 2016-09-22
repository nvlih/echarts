package com.contorller;

import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.io.File;
import java.io.IOException;
@Controller
public class IndexController {

    @RequestMapping(value = "index",method = RequestMethod.GET )
    public ModelAndView index(){
        return new ModelAndView("index");
    }

    @RequestMapping(value = "getjson",method = RequestMethod.GET )
    @ResponseBody
    public String getjson(){
        //File file = new File("src/main/resources/tree.json");
        String tree = "[{\n" +
                "\"id\":1,\n" +
                "\"text\":\"report\",\n" +
                "\"children\":[{\n" +
                "\"text\":\"bargraph\",\n" +
                "\"url\":\"bargraph\"\n" +
                "},{\n" +
                "\"text\":\"linegraph\",\n" +
                "\"url\":\"linegraph\"\n" +
                "},{\n" +
                "\"text\":\"piegraph\",\n" +
                "\"url\":\"piegraph\"\n" +
                "}, " +
                "{" +
                "\"text\":\"linebarstack\",\n" +
                "\"url\":\"linebarstack\"" +
                  "  },"+
                "{" +
                "\"text\":\"xstgraph\",\n" +
                "\"url\":\"xstgraph\"" +
                "},"+
                "{\"text\":\"pietugraph\",\n" +
                "\"url\":\"pietugraph\"" +
                "},"+
                "{\"text\":\"dbtgraph\",\n" +
                "\"url\":\"dbtgraph\"" +
                "}"+
                "]}]";
        return tree;
    }

    @RequestMapping(value = "bargraph",method = RequestMethod.GET )
    @ResponseBody
    public String bargraph(){
        String bargraph = "{\n" +
                "  \"id\": \"bargraph\"\n" +
                "}";
        return bargraph;
    }

    @RequestMapping(value = "linegraph",method = RequestMethod.GET )
    @ResponseBody
    public String linegraph(){
        String bargraph = "{\n" +
                "  \"id\": \"linegraph\"\n" +
                "}";
        return bargraph;
    }

    @RequestMapping(value = "piegraph",method = RequestMethod.GET )
    @ResponseBody
    public String piegraph(){
        String bargraph = "{\n" +
                "  \"id\": \"piegraph\"\n" +
                "}";
        return bargraph;
    }

    @RequestMapping(value = "linebarstack",method = RequestMethod.GET )
    @ResponseBody
    public String linebarstack(){
        String bargraph = "{\n" +
                "\"id\": \"linebarstack\"" +
                "}";
        return bargraph;
    }

    @RequestMapping(value = "xstgraph",method = RequestMethod.GET )
    @ResponseBody
    public String xstgraph(){
        String bargraph = "{\n" +
                "\"id\": \"xstgraph\"" +
                "}";
        return bargraph;
    }

    @RequestMapping(value = "pietugraph",method = RequestMethod.GET )
    @ResponseBody
    public String pietugraph(){
        String bargraph = "{\n" +
                "\"id\": \"pietugraph\"" +
                "}";
        return bargraph;
    }

    @RequestMapping(value = "dbtgraph",method = RequestMethod.GET )
    @ResponseBody
    public String dbtgraph(){
        String bargraph = "{\n" +
                "\"id\": \"dbtgraph\"" +
                "}";
        return bargraph;
    }

}
