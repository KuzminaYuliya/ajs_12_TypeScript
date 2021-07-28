import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('should add movie', () => {
  const cart = new Cart();
  const movieCart = new Movie(1020, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  cart.add(movieCart);
  expect(cart.items.length).toBe(1);
});

test('should return total sum', () => {
  const cart = new Cart();
  const movieCart = new Movie(1020, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  const movieCart2= new Movie(1021, 'Мстители2', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  cart.add(movieCart);
  cart.add(movieCart2);
  expect(cart.totalSum()).toBe(1000);
});

test('should return discount', () => {
  const cart = new Cart();
  const movieCart = new Movie(1020, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  const movieCart2= new Movie(1021, 'Мстители2', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  cart.add(movieCart);
  cart.add(movieCart2);
  expect(cart.finalTotalSum(50)).toBe(500);
});

test('should delete 1 item', () => {
  const cart = new Cart();
  const movieCart = new Movie(1020, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  const movieCart2= new Movie(1021, 'Мстители2', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  cart.add(movieCart);
  cart.add(movieCart2);
  cart.delete(1020);
  expect(cart.items.length).toBe(1);
});

test('should not delete item', () => {
  const cart = new Cart();
  const movieCart = new Movie(1020, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  const movieCart2= new Movie(1021, 'Мстители2', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, 'avengers.png', 500.00);
  cart.add(movieCart);
  cart.add(movieCart2);
  cart.delete(1022);
  expect(cart.items.length).toBe(2);
});
