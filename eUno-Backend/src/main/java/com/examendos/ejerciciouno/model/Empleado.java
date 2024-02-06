package com.examendos.ejerciciouno.model;
import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
public class Empleado {
    @Id
    private Long legajo;

    private String nombreEmpleado;
    private String apellidoEmpleado;
    private String cargo;
    private String sucursal;
    private int antiguedadAnios;
}