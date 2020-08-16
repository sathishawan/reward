package com.awanreward.awanreward.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "employee")
public class Employee {

    @Id
    private ObjectId _id;
    private int emp_no;
    private String emp_name;
    private Date last_timestamp;

    private List<Points> points;


    public Employee(ObjectId _id, int emp_no, String emp_name, List<Points> points, Date last_timestamp) {
        this._id = _id;
        this.emp_no = emp_no;
        this.emp_name = emp_name;
        this.points = points;
        this.last_timestamp = last_timestamp;
    }

    public String get_id() {
        return _id.toHexString();
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public int getEmp_no() {
        return emp_no;
    }

    public void setEmp_no(int emp_no) {
        this.emp_no = emp_no;
    }

    public String getEmp_name() {
        return emp_name;
    }

    public void setEmp_name(String emp_name) {
        this.emp_name = emp_name;
    }

    public List<Points> getPoints() {
        return points;
    }

    public void setPoints(List<Points> points) {
        this.points = points;
    }

    public Date getLast_timestamp() {
        return last_timestamp;
    }

    public void setLast_timestamp(Date last_timestamp) {
        this.last_timestamp = last_timestamp;
    }


}
