package com.examendos.ejerciciouno.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examendos.ejerciciouno.model.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long> {
}