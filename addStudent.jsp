<%@ page import = "java.sql.*"%>
<%
String rollNo = request.getParameter("rollNo");
String firstName = request.getParameter("firstName");
String lastName = request.getParameter("lastName");
String gender = request.getParameter("gender");
String email = request.getParameter("email");
String dob = request.getParameter("dob");
String branch = request.getParameter("branch");
String department = request.getParameter("department");
String contact = request.getParameter("contact");
try{
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/college","root","");
    PreparedStatement ps = conn.prepareStatement("insert into students(Roll_No,First_Name,Last_Name,Gender,Email,DOB,Branch,Department,Mobile) values(?,?,?,?,?,?,?,?,?)");
    ps.setString(1,rollNo);
    ps.setString(2,firstName);
    ps.setString(3,lastName);
    ps.setString(4,gender);
    ps.setString(5,email);
    ps.setString(6,dob);
    ps.setString(7,branch);
    ps.setString(8,department);
    ps.setString(9,contact);
    int x = ps.executeUpdate();
    if(x>0){
        out.println("Data Upload Successfully...");
    }else{
        out.println("Data Not Upload...");
    }
}catch(Exception e){
    out.println(e);
}
%>