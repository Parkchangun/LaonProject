package com.laonstory.demo.domain.entity;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
@Entity
@Table(name = "list")
public class Board extends Time{
    @Id @GeneratedValue
    private Integer id;
    @Column(length = 10, nullable = false)
    private String writer;
    @Column(length = 100, nullable = false)
    private String title;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Builder
    public Board(Integer id, String title, String content, String writer){
        this.id = id;
        this.title = title;
        this.content = content;
        this.writer = writer;
    }
}
