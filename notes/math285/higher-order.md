# Higher Order Differential Equations

## Wronskian

The Wronskian of a set of functions $y_1$ and $y_2$ is defined to be the determinant

$$W(y_1, y_2) (t) = \begin{vmatrix} y_1 & y_2 \\\\ y'_1 & y'_2 \end{vmatrix}$$

## Constant Coefficients

- Only works for homogeneous equations.

### Key Idea

Given the $n^{th}$ order constant coefficient linear differential equation

$$\frac{d^ny}{dt^n} + p_{n-1} \frac{d^{n-1}y}{dt^{n-1}} + ... p_1 \frac{dy}{dt} + p_0y = 0$$ with $p_0, p_1,...p_{n-1}$ constants, the *characteristic equation* is defined to be

$$(r^n + p_{n-1}r^{n-1} + ...p_1r+p_0)=0$$

There are three cases to be considered.

### 1. Real distinct roots

Solution:

$$y = C_1 e^{r_1 t} + C_2 e^{r_2 t} + ... C_n e^{r_n t}$$

That means, if the characteristic equation has $n$ real distinct roots $r_1, r_2, ...r_n$, then the differential equation has solutions $y_1 = e^{r_1t}$, $y_2 = e^{r_2t}$,...

### 2. Complex distinct roots

If the characteristic equation has a pair of complex conjugate roots $a \pm bi$, then the differential euqation has solutions $y_1(t) = e^{a + bi t}$ and $y_2(t) = e^{a - bi t}$. Alternatively, $y_1(t) = e^{at}\cos(bt)$ and $y_2(t) = e^{at}\sin(bt)$. So,

$$y = C_1 e^{at}\cos(bt) + C_2 e^{at}\sin(bt)$$

> This is due to the Euler's Theorem
> $$e^{(a +bi)t} = e^{at}(\cos bt + i\sin bt) = e^{at} \cos bt + ie^at \sin bt$$

### 3. Repeated Roots

If $r_i$ is a repeated root of the characteristic equation of multiplicity $k$, then the differential euqation has $k$ linearly independent solution given by

$$y_1(t) = e^{r_it}$$
$$y_2(t) = te^{r_it}$$
$$y_3(t) = t^2e^{r_it}$$
$$y_k(t) = t^{k-1}e^{r_it}$$

## Undetermined Coefficients

- For non-homogeneous differential equations, the general solution to

$$\mathcal{L} y = f(t)$$

is given by

$$y(t) = y_{part}(t) + y_{hom}(t)$$

There are several ways to find $y_{part}$, and the method of undetermined coefficients is a way to solve it. 

### Constraints

$f(t)$ must be written as an

- Polynomial in $t$
- $\sin(\omega t)$ or $\cos(\omega t)$
- Exponential $e^{at}$

or sums and products of terms of this form.

### Method

To find the general solution to the differential equation:

1. Find $y_{hom}$

2. Make a gurss for $y(t)$ in the same form as $f(t)$, with undetermined coefficients $A_1, A_2,...A_n$.

3. Use $y_{hom}$ to update the guess: If any terms in common between $y_{part}$ and $y_{hom}$, multiply the guess by the smallest power of $t$ so that no terms match

4. Substitute the guess into the differential equation.

5. Solve for the coefficients $A_i$.


| $f(t)$ | $y(t)$ |
| --- | ----------- |
| $f(t) = t^k$ | $y(t) = A_0 + A_1t+A_2t^2+...A_kt^k$ |
| $f(t) = e^{at}$ | $y(t) = Ae^{at}$ |
| $f(t) = \sin(\omega t)$ or $f(t) = \cos(\omega t)$ | $y(t) = A\sin \omega t + b \cos \omega t$ |

## The Annihilator Method

## Variation of Parameters

- **General** way to find $y_{part}$

This will solve any non-hemogeneous linear equation provided we can solve the homogeneous equation.

### Method

1. Find 2 linearly independent solution $y_1$ and $y_2$ $y_{hom}$. That is, $y_{hom} = C_1y_1 + C_2y_2$

2. Find the Wronskian $W(t)$ of $y_1$ and $y_2$

    $$W(y_1, y_2) (t) = \begin{vmatrix} y_1 & y_2 \\\\ y'_1 & y'_2 \end{vmatrix}$$

3. Apply the variation of parameter formula

    $$y_{part}(t) = y_2(t) \int_{a}^{t} \frac{y_1(s)f(s)}{W(s)} ds + y_1(t) \int_{a}^{t} \frac{y_2(s)f(s)}{W(s)} dx$$

    We can choose whatever $a$ is to make the integrals simplest.

## Laplace Transform

