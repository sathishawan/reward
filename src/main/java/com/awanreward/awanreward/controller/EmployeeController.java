package com.awanreward.awanreward.controller;
import com.awanreward.awanreward.models.Employee;
import com.awanreward.awanreward.repositories.EmployeeRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.SortDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class EmployeeController{

    @Autowired
    private EmployeeRepository employeeRepository;

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/getallemployeedata", method = RequestMethod.GET)
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll(Sort.by(Sort.Direction.DESC, "last_timestamp"));
    }



    @CrossOrigin(origins="*")
    @RequestMapping(value = "Reward/{_id}", method = RequestMethod.GET)
    public Employee getEmp_databaseById(@PathVariable("_id") String _id) {
        return employeeRepository.findBy_id(_id);
    }
    @CrossOrigin(origins = "*")


    @RequestMapping(path="/between",method = RequestMethod.GET)
    public List getpointvalueBetween(@RequestParam(value="param1", required=true) int point_value1,@RequestParam(value="param2", required=false) int point_value2) {
        return employeeRepository.findByPoint_ValueBetweenQuery(point_value1 , point_value2);
    }


    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/greaterthan",method = RequestMethod.GET)
    public List getpointvalueGreaterThan(@RequestParam  int point_value){
        return employeeRepository.findByPointValueGreaterThanQuery(point_value);
    }


    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/lesserthan",method = RequestMethod.GET)
    public List getpointvalueLesserThan(@RequestParam  int point_value){
        return employeeRepository.findByPointValueLessThanQuery(point_value);
    }


    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public @Valid Employee add(@Valid @RequestBody Employee employee) {
        employee.set_id(ObjectId.get());
        employeeRepository.save(employee);
        return employee ;
    }


    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public List getByEmployeeName(@RequestParam String emp_name) {
        return employeeRepository.findByEmployeeNameIgnoreCase(emp_name);
    }


    @CrossOrigin(origins = "*")
    @DeleteMapping(value = "/delete/{id}")
    public void deletePet(@PathVariable  String id) {
        employeeRepository.deleteById(id);
    }

//    @CrossOrigin(origins = "*")
//    @RequestMapping(value = "/pagination", method = RequestMethod.GET)
//    public Page<Employee> employeesPageable(@RequestParam(value = "pageNumber", required =
//            true)Integer id,  Pageable pageable) {
//        return employeeRepository.findAll(pageable);
//
//    }

    @CrossOrigin(origins = "*")
    @RequestMapping(value = "/pagination",params = { "page", "size" }, method = RequestMethod.GET)
    public Page<Employee> findAllUsers(@RequestParam(value = "page",required = true) Integer page, @RequestParam(value ="size",required = true) Integer size, Pageable pageable) {
        return employeeRepository.findAll(pageable);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/ascending")
    public Page<Employee> findAllUsersSortedByName(@RequestParam("sorting") String sort, Pageable pageable) {
        return employeeRepository.findAll(pageable);
    }

//    @GetMapping("/descending")
//    public Page<Employee> findAllUsersSortedByName(@SortDefault(sort = "sort",
//            direction = Sort.Direction.DESC) Pageable pageable) {
//        return employeeRepository.findAll(pageable);
//    }



    @CrossOrigin(origins = "*")
    @RequestMapping( value="/update/{_id}",method=RequestMethod.PUT)
    public Employee update(@PathVariable String _id, @RequestBody Employee employee) {
        Optional<Employee> opemployee = employeeRepository.findById(_id);
        Employee e = opemployee.get();
        if(employee.getEmp_no() != 0)
            e.setEmp_no(employee.getEmp_no());
        if(employee.getEmp_name() != null)
            e.setEmp_name(employee.getEmp_name());
        if(employee.getPoints() != null)
            e.setPoints(employee.getPoints());
        employeeRepository.save(e);
        return e;
    }

}
