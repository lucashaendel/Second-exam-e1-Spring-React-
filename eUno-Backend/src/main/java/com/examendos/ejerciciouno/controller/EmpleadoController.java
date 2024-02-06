package com.examendos.ejerciciouno.controller;

import com.examendos.ejerciciouno.model.Empleado;
import com.examendos.ejerciciouno.repository.EmpleadoRepository;
import com.examendos.ejerciciouno.service.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/empleados")
public class EmpleadoController {

    @Autowired
    private EmpleadoService empleadoService;

    @GetMapping
    public ResponseEntity<List<Empleado>> obtenerTodosLosEmpleados() {
        List<Empleado> empleados = empleadoService.obtenerTodosLosEmpleados();
        return new ResponseEntity<>(empleados, HttpStatus.OK);
    }

    @GetMapping("/{legajo}")
    public ResponseEntity<Empleado> obtenerEmpleadoPorLegajo(@PathVariable Long legajo) {
        Empleado empleado = empleadoService.obtenerEmpleadoPorLegajo(legajo);
        if (empleado != null) {
            return new ResponseEntity<>(empleado, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Empleado> guardarEmpleado(@RequestBody Empleado empleado) {
        Empleado empleadoGuardado = empleadoService.guardarEmpleado(empleado);
        return new ResponseEntity<>(empleadoGuardado, HttpStatus.CREATED);
    }

    @PutMapping("/{legajo}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Long legajo, @RequestBody Empleado empleado) {
        Empleado empleadoActualizado = empleadoService.actualizarEmpleado(legajo, empleado);
        if (empleadoActualizado != null) {
            return new ResponseEntity<>(empleadoActualizado, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{legajo}")
    public ResponseEntity<Void> eliminarEmpleado(@PathVariable Long legajo) {
        empleadoService.eliminarEmpleado(legajo);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}