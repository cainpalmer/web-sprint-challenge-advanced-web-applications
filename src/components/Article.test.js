import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';
import Article from './Article';
import { render } from 'react-dom';

test('renders component without errors', ()=> {
    render(<Article />)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article headline = {article.headline} author = {article.author} />)
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article />)
    const AssociatedPress = screen.queryByText(/no author is given/i)
    expect (AssociatedPress).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', ()=> {
    render(<Article handleDelete = {deleteButton} />)
});

//Task List:
//1. Complete all above tests. Create test article data when needed.