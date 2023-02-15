package com.gettingbks.books;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:4200")
public class BooksController {
	@Autowired
	private BookService bks;
	@GetMapping
	public ResponseEntity<List<Books>> getAllBooks(){
		if(bks.getAllBooks().size()==0) {
			System.out.println("no content");
			return new ResponseEntity<List<Books>>(null);
		}
		return new ResponseEntity<List<Books>>(bks.getAllBooks(),HttpStatus.OK);
	}
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Books>> getSingleBook(@PathVariable Long id){
		return new ResponseEntity<Optional<Books>>(bks.singleBook(id),HttpStatus.OK);
	}
    @PostMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Books>createBook(@RequestBody Books book) {
    	System.out.println("hello");
        Books savedBook = bks.savebook(book);
        return new ResponseEntity<Books>(savedBook,HttpStatus.OK );
    }
	@DeleteMapping("/{isbn}")
	public ResponseEntity<Void> deleteBookByIsbn(@PathVariable String isbn) {
	    Books book = bks.findByisbn(isbn);
	    if (book != null) {
	        bks.delete(book);
	        return ResponseEntity.noContent().build();
	    }
	    return ResponseEntity.notFound().build();
	}
}