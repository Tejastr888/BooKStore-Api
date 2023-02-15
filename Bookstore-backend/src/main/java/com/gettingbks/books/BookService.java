package com.gettingbks.books;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class BookService {
	@Autowired
	private BooksRepository em;
	
	public Optional<Books> singleBook(Long id) {
		return em.findById(id);
	}
    public Books findByisbn(String isbn) {
		return em.findByIsbn(isbn);
    }

	public Books create(Books book) {
		return em.save(book);
	}
	public Books savebook(Books book) {
		return em.saveAndFlush(book);
	}
    public void delete(Long id) {
    	em.deleteById(id);
    }
    public void delete(Books book) {
    	em.delete(book);
    }
	public List<Books> getAllBooks(){
		return em.findAll();
	}

	public 	Long count() {
		return em.count();
	}
	
}
