import confetti from "canvas-confetti"

const MyConfetti = {
    fire: () => {
        const count = 500
        const defaults = {
            origin: {y: 0.15},
        }

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                colors: ["#f1fa8c", "#50fa7b", "#bd93f9"],
                particleCount: Math.floor(count * particleRatio),
            })
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        })
        fire(0.2, {
            spread: 60,
        })
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        })
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        })
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        })
    },
}

export default MyConfetti
