<br><br>

This is a simple version of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life). The board contains 50x50 cells and each iteration takes 100ms. 
<br><br>
The rules are relatively simple:
  1. Any live cell with fewer than two live neighbors dies, as if caused by underpopulation.
  2. Any live cell with two or three live neighbors lives on to the next generation.
  3. Any live cell with more than three live neighbors dies, as if by overpopulation.
  4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

I implement these rules by computing a convolution between the board and a kernel in a for loop with horrible indexing and checking the resulting sum. See [here](https://github.com/mldangelo/mldangelo/tree/master/app/pages/posts/first/Conway.js) for how it's done. 
<br><br>
Conway's Game of Life was one of the very first programs I wrote on my own when I started learning Java. I thought it would be fitting to revisit it here. Thanks for reading! 

<br>
