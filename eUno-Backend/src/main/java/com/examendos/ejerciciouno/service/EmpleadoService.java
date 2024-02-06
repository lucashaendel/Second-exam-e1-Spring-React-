package com.examendos.ejerciciouno.service;

import com.examendos.ejerciciouno.model.Empleado;
import com.examendos.ejerciciouno.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EmpleadoService {

    @Autowired
    private EmpleadoRepository empleadoRepository;

    public List<Empleado> obtenerTodosLosEmpleados() {
        return empleadoRepository.findAll();
    }

    public Empleado obtenerEmpleadoPorLegajo(Long legajo) {
        return empleadoRepository.findById(legajo).orElse(null);
    }

    public Empleado guardarEmpleado(Empleado empleado) {
        return empleadoRepository.save(empleado);
    }

    public Empleado actualizarEmpleado(Long legajo, Empleado empleado) {
        Empleado empleadoExistente = empleadoRepository.findById(legajo).orElse(null);
        if (empleadoExistente != null) {
            empleado.setLegajo(legajo);
            return empleadoRepository.save(empleado);
        } else {
            return null;
        }
    }

    public void eliminarEmpleado(Long legajo) {
        empleadoRepository.deleteById(legajo);
    }
}