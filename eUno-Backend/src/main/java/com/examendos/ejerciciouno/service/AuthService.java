package com.examendos.ejerciciouno.service;

import com.examendos.ejerciciouno.model.Usuario;
import com.examendos.ejerciciouno.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository userRepository;

    public boolean authenticate(String nombreUsuario, String passwordUsuario) {
        Usuario user = userRepository.findByNombreUsuarioAndPasswordUsuario(nombreUsuario, passwordUsuario);
        return user != null;
    }
}