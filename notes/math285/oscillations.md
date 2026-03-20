# Mechanical and Electrical Oscillationsions

## Undampted Oscillations

### Goal

- To look in depth at some important physical examples
- mechanical oscillations, with no friction

### Examples

#### Ex. 1: mass on a spring, no friction

$$mx'' + kx = 0$$

which is $x'' + \frac{k}{m}x = 0$, and can further be rewritten to

$$x'' + \omega_0^2 x = 0$$

where $\omega_0=\sqrt{\frac{k}{m}}$, called as the **natural frequency**.

#### Ex. 2: pendulum

$$\theta'' + \frac{g}{L}\sin \theta = 0$$

For small $\theta$, $\sin \theta \approx \theta$, so $\theta'' + \frac{g}{L} \theta = 0$, which can be rewritten to

$$\theta'' + \omega_0^2 \theta = 0$$

where $\omega_0 = \frac{g}{L}$ is the natural frequency.

### Natural Frequency

Find solution to $x'' + \frac{k}{m}x = 0$. (Use $e^{rt}$)

$$
\begin{aligned}
x &= C_1 \cos (\sqrt{\frac{k}{m} t}) + C_2 \sin (\sqrt{\frac{k}{m} t}) \\\\
&= C_1 \cos (\omega_0 t) + C_2 \sin (\omega_0 t)
\end{aligned}
$$

- frequency is always $\omega_0$ regardless of initial conditions, so the period of oscillation only depends on the spring strength and mass, and will be the same if you pull the spring very far or just a bit
- for the pendulum (when $\theta$ small), only $L$ matters

### Forcing Term

- non-hemogeneous equations

$$mx'' + kx = f(t)$$

Particular interest: periodic forcing

$$mx'' + kx = F_0 \cos(\omega t)$$

- 2 things we can cahnge in input force
    - strength $F_0$
    - frequency $\omega$

> **Key questions:**
> 1. How does solution $x_{part}$ compare to the external forcing? i.e. what response are we getting for the force we put in?
> 2. How does teh response depend on forcing frequency $\omega$

### Examples

#### Equation w/ forcing

$$mx'' + kx = F_0 \cos (\omega t)$$

$$x'' + \omega_0^2 x = \frac{F_0}{m} \cos (\omega t)$$

Solve for $x_{part}$.

We already have $x_{hom} = C_1 \cos (\omega_0 t) + C_2 \sin (\omega_0 t)$

Case 1: forcing frequency $\neq$ natural frequency

$$x_{part} = \frac{F_0}{m(\omega_0^2-\omega^2)} \cos (\omega t)$$

Case 2: forcing frequency $=$ natural frequency

$$x_{part} = \left( \frac{F_0}{2m\omega_0}t \right) t \sin (\omega_0 t)$$

> Comparison
> - When $\omega = \omega_0$, the solution grows unbounded ($t \sin (\omega_0 t)$ term). This phenomenon is called **resonance**
> - Note that for $\omega \neq \omega_0$, as $\omega \rightarrow \omega_0$, amplitude of $x_{part}$, while finite, grows large, approaching resonance

## Damped Vibration

Force of damping: $F = -\gamma v$ (proportional to velocity)

Equation: $x'' + \frac{\gamma}{m}x' + \frac{k}{m}x = 0$

Homogeneous solution

$$r = \frac{-\gamma}{2m} \pm \frac{1}{2m} \sqrt{\gamma^2 - 4km}$$

So, we have 3 situations depending on $\gamma$

1. $\gamma^2 - 4km > 0$ (large $\gamma$), "overdamped", 2 real roots (both negative)
    $$x = C_1 e^{\frac{-1}{2m} (\gamma + \sqrt{\gamma^2-4km})t} + C_2 e^{\frac{-1}{2m} (\gamma - \sqrt{\gamma^2-4km})t}$$
2. $\gamma^2 - 4km = 0$ (one specific $\gamma$ value) "critically damped", repeated real root, $r = \frac{-\gamma}{2m}$
    $$x = C_1 e^{\frac{-\gamma}{2m} t} + C_2 te^{\frac{-\gamma}{2m} t}$$
3. $\gamma^2 - 4km <> 0$ (small $\gamma$), "underdamped", 2 complex roots, $r_0 = \frac{-\gamma}{2m} \pm i \omega_{\gamma}$, $\omega_{\gamma} = \sqrt{\frac{k}{m} - \frac{\gamma^2}{4m^2}}$
    $$x = C_1 e^{\frac{-\gamma}{2m}t} \sin(\omega_{\gamma} t) + C_2 e^{\frac{-\gamma}{2m}t} \cos(\omega_{\gamma} t)$$

### Forcing

What does damping do to periodic forcing?
- how does amplitude of $x_{part}$ compare to $F_0$?
- how does this depend on $\omega$?
    - Is there a forcing frequency that maximizes solution amplitude?

Real equation
$$x'' + \frac{\gamma}{m}x' + \frac{k}{m}x = \frac{F_0}{m}\cos(\omega t)$$
$$mx'' + \gamma x' + kx = F_0 \cos(\omega t) = Re(F_0e^{i\omega t})$$

Complex equation
$$m\tilde{x}'' + \gamma \tilde{x}' + k\tilde{x} = F_0 e^{i\omega t}$$

We already have $x_hom$ from above. We need $x_{part}$.

$$\tilde{x}_{part} = Ae^{i\omega t} = \frac{F_0}{\sqrt{(k-m\omega^2)^2 + \gamma^2 \omega^2}} e^{i(\omega t - \theta)}$$

Real solution:

$x_{part} = Re(\tilde{x}_{part}) = \frac{F_0}{\sqrt{(k-m\omega^2)^2 + \gamma^2 \omega^2}} \cos(\omega t - \theta)$

### Summary

- With damping, $x_{hom}$ always goes to 0: "transient" effect, but periodic foring gives periodic $x_{part}

- Investigate amplitude as a function of $\omega$

    - overdamped or critically damped: amplitude max a $\omega = 0$ (no inherent periodic motion in free system, so no preferred frequency)

    - $\gamma < 2km$ (subset of underdamped): amplitude max at $\omega = \pm \sqrt{\frac{k}{m} - \frac{\gamma^2}{2m^2}}$

- damping decreases amplitude compared to undamped

- when sufficiently underdamped ($\gamma < 2km$), there is still a frequency that maximizes amplitude

- no true resonance (unbounded solutions) with damping, but for small $\omega$, can still have large amplitudes near $\omega = \omega_0$