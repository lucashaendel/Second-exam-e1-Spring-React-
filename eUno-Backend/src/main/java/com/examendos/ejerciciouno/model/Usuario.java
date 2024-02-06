package com.examendos.ejerciciouno.model;

import jakarta.persistence.*;
import lombok.*;


@Data
@Entity
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;

    private String nombreUsuario;
    private String passwordUsuario;
}
