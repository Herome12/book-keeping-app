import React, { useState } from 'react';
import { createBook } from '../../redux/actions/books/bookActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // Get the user id from store
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  // Dispatch action
  const dispatch = useDispatch();

  const formSubmitHandler = e => {
    const data = {
      category,
      title,
      author,
      createdBy: userInfo && userInfo._id,
    };
    e.preventDefault();
    dispatch(createBook(data));
    navigate('/books');
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-lg-6 col-md-8'>
          <h1 className='text-center mb-4'>Add Book</h1>
          <form onSubmit={formSubmitHandler}>
            <div className='form-group'>
              <label htmlFor='category'>Category</label>
              <select
                id='category'
                value={category}
                onChange={e => setCategory(e.target.value)}
                className='form-control'>
                <option value='programming'>Programming</option>
                <option value='religion'>Religion</option>
                <option value='life'>Life</option>
                <option value='culture'>Culture</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='author'>Author</label>
              <input
                id='author'
                value={author}
                onChange={e => setAuthor(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Author name'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                id='title'
                value={title}
                onChange={e => setTitle(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Book title'
              />
            </div>
            <button type='submit' className='btn btn-primary btn-block'>
              Create Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
