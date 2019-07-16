package com.KrupoderovMikhail.github.sarafan.repo;

import com.KrupoderovMikhail.github.sarafan.domain.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepo extends JpaRepository<Message, Long> {
}
