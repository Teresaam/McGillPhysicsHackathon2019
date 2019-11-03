# mcgill_physics_hackathon_2019
the project is to find where electrons are in a lattice

## Sat 2 Nov - 14:50
We divided up the positions. KC and Bastien (one physicist and one computer scientist) are to work on the back-end (aka diagonalizing the Hamiltonian). Stephen is keeping the log (this thing here that you're reading) and working on p5, the presentation, as well as helping with the animation / aesthetics which will be lead by Teresa. Teresa and I will test Bastien and KC's code once they have something up and running.

We are working with repl.it an ide that runs in the browser. Sofar we have 5 files - \textt{backend.py}, what Bastien and KC will work on, so far Teresa is trying to make python communicate with js; \texttt{script.js} file; a css file for style, and html.

## Sat 2 Nov - 16:10
- steve : trying to figure out p5 and how to plot the 2d thing. 
- bastien : Sow have basically the whole idea and now we're just going to start coding. Rn we basically found that a-lot of the terms in the Hamiltonian go to zero, so it makes our job a-lot easier, the problem can be reduced to looking at nearest neighbours of each basis state and just putting a minus t.
- Teresa : still trying to get these languages to interact. 
- KC : Essentially B and I were discussing the issues related w/ computing the non-trivial term of the Hamiltonian, we found that it was not difficult. The issue now is that we have to find the nearest neighbours somewhat efficiently.

## Saturday 2 Nov - 18:38
- KC :  essentially i managed to get the neighbour finding function in python, it's actually really fast so we can go to higher dimentions. It remains to be seen if the lag time will become a problem when we communicate with js.
- Bastien : basically i wrote a fuction that takes in one of the lattice points and associated a natural number with it. It's going to be useful for when when we want to populate the matrix. 
- Teresa : Rn i managed to make the python file and html file communicate in both directions. I am running test locallyfor connection.
- Stephen : I am plotting 2D plots trying to visualise eigenvectors for the 2d example.

## Sat 2 nov - 21:20
- Made the github repo and things are starting to take some shape. Bastien and KC have got some things, Teresa has got everything talking with each other and is coordinating and planning some structured communication and I have some 2D plots going. RN me and her are trying to get several things on the canvas. 
- Bastien : We actually finished the code for a hamiltonian so now we actually found an actual matrix; and we diagonalised it and ehh we obviously see the effect.
- KC : Essentially we wrote a function that computes the hamiltonian and a fcn that returns the normalized eigenstates; everything works fine but it works slowly... There were some suggestions about saving the eigenvectors and loading them up when they are needed. 
- Stphene : I have been doing some 2d plots, got git up and running and some peripheral stuff...
- Teresa : I finally made the js documents communicate correctly with the server... had dinner... checking how p5 is behaving etc. 

## Saturday 2 Nov - 23:30
- Stephen : Started messing with 3d, also figured out how the several frames in 2d works, I decided i don't like js. I also had a good idea for computing how localized an eigenvalue is - the geometric mean will tell us how localized the thingy is :).
- KC : Words words words words words words. So what do i have to say ehm... I have been saving eigen-vectors so that they can easily be loaded in from python. I'm basically saveing them so that we have abunch of eigen-vectors from k = 1 through 30. Though Bastien and I have figured that (mostly bastien) that we should take the eigen-vector with the highest eigen value that way we have the one that has the most pronounced localization.
- Teresa : There was a bug... I'm still... There was a bug... Did I already said that I solved the problem of communication. Stop copying every word that I'm saying. I'm working on getting the Eigen-vectors for you.

## sunday 3 nov - 4:26
- Stpehen : Dying
