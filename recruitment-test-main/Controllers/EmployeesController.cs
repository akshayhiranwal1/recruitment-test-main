using InterviewTest.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace InterviewTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeesController : ControllerBase
    {
        private SqlDbcontext _context;
        public EmployeesController(SqlDbcontext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Employee> Get()
        {
            return _context.Employees.ToList();
        }

        [HttpGet, Route("{id}")]
        public Employee Get(int id)
        {
            return _context.Employees.FirstOrDefault(i => i.Id == id);
        }

        [HttpPost]
        public Employee Post([FromBody] Employee employee)
        {
            _context.Add(employee);
            _context.SaveChanges();

            return employee;
        }

        [HttpPut]
        public Employee Put([FromBody] Employee employee)
        {
            var model = _context.Employees.FirstOrDefault(i => i.Id == employee.Id);
            model.Name = employee.Name;
            model.Value = employee.Value;
            _context.Update(model);
            _context.SaveChanges();

            return model;
        }

        [HttpDelete, Route("{id}")]
        public void Delete(int id)
        {
            var model = _context.Employees.FirstOrDefault(i => i.Id == id);
            _context.Remove(model);
            _context.SaveChanges();
        }

        [HttpGet, Route("UpdateIncrement")]
        public List<Employee> UpdateIncrement()
        {
            var employees = _context.Employees.Select(i => new Employee()
            {
                Id = i.Id,
                Name = i.Name,
                Value = i.Name.ToUpper().StartsWith("E") ? i.Value + 1 :
                    (i.Name.ToUpper().StartsWith("G") ? i.Value + 10 : i.Value + 100)
            }).ToList();

            _context.Employees.UpdateRange(employees);
            _context.SaveChanges();

            return _context.Employees.ToList();
        }
    }
}
