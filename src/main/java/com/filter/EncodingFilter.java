package com.filter;
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
public class EncodingFilter extends HttpServlet implements Filter {

    private static final long serialVersionUID = 1L;
    private String encoding;
    private WebApplicationContext wac = null;
    public EncodingFilter() {
        encoding = null;
    }
    public void destroy() {
        encoding = null;
    }
    public void init(FilterConfig filterConfig) throws ServletException {
        encoding = filterConfig.getInitParameter("encoding");
        if (encoding == null || "".equals(encoding)) {
            encoding = "UTF-8";
        }
        wac = WebApplicationContextUtils.getRequiredWebApplicationContext(filterConfig.getServletContext());
    }

    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException,
            ServletException {
        HttpServletResponse resp = (HttpServletResponse) response;
        HttpServletRequest req = (HttpServletRequest) request;
        req.setCharacterEncoding(encoding);
        resp.setCharacterEncoding("UTF-8");

        resp.setContentType("text/html;charset=UTF-8");
        /**
         * 设置所有请求 可以跨域
         */
        chain.doFilter(req, resp);
    }
}
