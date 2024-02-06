package com.examendos.ejerciciouno.repository;

import com.examendos.ejerciciouno.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByNombreUsuarioAndPasswordUsuario(String nombreUsuario, String password);
}