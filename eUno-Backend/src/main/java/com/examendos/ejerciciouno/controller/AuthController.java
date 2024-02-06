package com.examendos.ejerciciouno.controller;

import com.examendos.ejerciciouno.model.Usuario;
import com.examendos.ejerciciouno.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody Usuario usuario) {
        String nombreUsuario = usuario.getNombreUsuario();
        String passwordUsuario = usuario.getPasswordUsuario();
        if (authService.authenticate(nombreUsuario, passwordUsuario)) {
            return ResponseEntity.ok("Login exitoso para el usuario: " + nombreUsuario);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Nombre de usuario o contraseña incorrectos");
        }
    }
}