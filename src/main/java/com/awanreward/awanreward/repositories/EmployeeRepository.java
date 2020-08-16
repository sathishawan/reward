package com.awanreward.awanreward.repositories;

import com.awanreward.awanreward.models.Employee;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface EmployeeRepository extends MongoRepository<Employee, String>, PagingAndSortingRepository<Employee, String> {

    @Override
    Page<Employee> findAll(Pageable pageable);

    Employee findBy_id(Object _id);

    @Override
    void delete(Employee deleted);


    @org.springframework.data.mongodb.repository.Query(value = "{'points.point_value':{$gt:?0,$lt:?1}}")
    List findByPoint_ValueBetweenQuery(int point_value1, int point_value2);

    @org.springframework.data.mongodb.repository.Query(value = "{'points.point_value':{$gt:?0}}")
    List findByPointValueGreaterThanQuery(int point_value);

    @org.springframework.data.mongodb.repository.Query(value = "{'points.point_value':{$lt:?0}}")
    List findByPointValueLessThanQuery(int point_value);

    @org.springframework.data.mongodb.repository.Query(value = "{'emp_name' : { $regex : ?0, $options: 'i' } }")
    List findByEmployeeNameIgnoreCase(String emp_name);

}
