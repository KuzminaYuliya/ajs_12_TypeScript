import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add movie', () => {
  const cart = new Cart();
  const avengers = new Movie(1020, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  cart.add(avengers);
  expect(cart.items.length).toBe(1);
});

test('total for empty cart', () => {
  const cart = new Cart();
  expect(cart.totalSum()).toBe(0);
});

test('check total sum', () => {
  const cart = new Cart();
  const avengers = new Movie(1020, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  const film = new Movie(1010, 'Lala', 'Lala', 1999, 'UK', 'Lalalal', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 120, 'lalala.png', 400.00);
  cart.add(avengers);
  cart.add(film);
  expect(cart.totalSum()).toBe(900);
});

test('check total with discount', () => {
  const cart = new Cart();
  const avengers = new Movie(1020, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  const film = new Movie(1010, 'Lala', 'Lala', 1999, 'UK', 'Lalalal', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 120, 'lalala.png', 400.00);
  cart.add(avengers);
  cart.add(film);
  expect(cart.finalTotalSum(50)).toBe(450);
});

test('delete item', () => {
  const cart = new Cart();
  const avengers = new Movie(1020, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  const film = new Movie(1010, 'Lala', 'Lala', 1999, 'UK', 'Lalalal', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 120, 'lalala.png', 400.00);
  cart.add(avengers);
  cart.add(film);
  cart.delete(1020);
  expect(cart.items.length).toBe(1);
});

test('delete non-existent item', () => {
  const cart = new Cart();
  const avengers = new Movie(1020, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  const film = new Movie(1010, 'Lala', 'Lala', 1999, 'UK', 'Lalalal', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 120, 'lalala.png', 400.00);
  cart.add(avengers);
  cart.add(film);
  cart.delete(555);
  expect(cart.items.length).toBe(2);
});