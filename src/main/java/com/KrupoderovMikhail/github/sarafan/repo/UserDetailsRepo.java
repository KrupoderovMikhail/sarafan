package com.KrupoderovMikhail.github.sarafan.repo;

import com.KrupoderovMikhail.github.sarafan.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDetailsRepo extends JpaRepository<User, String> {
}
