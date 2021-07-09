package com.laonstory.demo.controller;

import com.laonstory.demo.dto.BoardDto;
import com.laonstory.demo.service.BoardService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@AllArgsConstructor
public class BoardController {
    private BoardService boardService;

    @GetMapping("/list")
    public String list(Model model){
        List<BoardDto> boardDtoList = boardService.getBoardList();
        model.addAttribute("boardList", boardDtoList);
        return "board/list.html";
    }

    @GetMapping("/post")
    public String write(){
        return "board/write.html";
    }

    @PostMapping("/post")
    public String write(BoardDto boardDto){
        boardService.savePost(boardDto);
        System.out.println("aaa");
        return "redirect:/list";
    }

    @GetMapping("/post/{no}")
    public String detail(@PathVariable("no") Integer id, Model model){
        BoardDto boardDto = boardService.getPost(id);
        model.addAttribute("boardDto", boardDto);
        return "board/detail.html";
    }

    @GetMapping("/post/edit/{no}")
    public String edit(@PathVariable("no") Integer id, Model model){
        BoardDto boardDto = boardService.getPost(id);
        model.addAttribute("boardDto", boardDto);
        return "board/update.html";
    }

    @PutMapping("/post/edit/{no}")
    public String update(BoardDto boardDto){
        boardService.savePost(boardDto);
        return "redirect:/";
    }

    @DeleteMapping("/post/{no}")
    public String delete(@PathVariable("no") Integer id){
        boardService.deletePost(id);
        return "redirect:/";
    }
}
