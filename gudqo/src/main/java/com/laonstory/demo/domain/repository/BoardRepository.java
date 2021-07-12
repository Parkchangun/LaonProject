package com.laonstory.demo.domain.repository;

import com.laonstory.demo.domain.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface BoardRepository extends JpaRepository<Board, Integer> {
}
