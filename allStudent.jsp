<%@ page import = "java.sql.*"%>
<%@page contentType="application/json; charset=UTF-8"%>
<%@page import="org.json.simple.*"%>
<%
try{
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/college","root","");
    Statement statement = conn.createStatement();
    String sql = "SELECT * FROM students";
    JSONArray jsonArray = new JSONArray();
    ResultSet resultSet = statement.executeQuery(sql);

    while (resultSet.next()) {
        JSONObject obj = new JSONObject();
        obj.put("Roll_No", resultSet.getString("Roll_No"));
        obj.put("First_Name", resultSet.getString("First_Name"));
        obj.put("Last_Name", resultSet.getString("Last_Name"));
        obj.put("Gender", resultSet.getString("Gender"));
        obj.put("DOB", resultSet.getString("DOB"));
        obj.put("Email", resultSet.getString("Email"));
        obj.put("Branch", resultSet.getString("Branch"));
        obj.put("Department", resultSet.getString("Department"));
        obj.put("Mobile", resultSet.getString("Mobile"));
        jsonArray.add(obj);
    }
    
    response.getWriter().write(jsonArray.toString()); 
    response.getWriter().flush(); 
    response.getWriter().close();
}catch(Exception e){
    out.println(e);
}
%>