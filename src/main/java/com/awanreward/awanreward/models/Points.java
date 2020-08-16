package com.awanreward.awanreward.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "points")
public class Points {

    private int point_value;
    private int point_received;
    private int point_donate;
    private int point_expired;


    public Points(int point_value, int point_received, int point_donate, int point_expired) {
        this.point_value = point_value;
        this.point_received = point_received;
        this.point_donate = point_donate;
        this.point_expired = point_expired;

    }

    public int getPoint_value() {
        return point_value;
    }

    public void setPoint_value(int point_value) {
        this.point_value = point_value;
    }

    public int getPoint_received() {
        return point_received;
    }

    public void setPoint_received(int point_received) {
        this.point_received = point_received;
    }

    public int getPoint_donate() {
        return point_donate;
    }

    public void setPoint_donate(int point_donate) {
        this.point_donate = point_donate;
    }

    public int getPoint_expired() {
        return point_expired;
    }

    public void setPoint_expired(int point_expired) {
        this.point_expired = point_expired;
    }


}
