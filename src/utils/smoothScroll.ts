/**
 * Butter-smooth cinematic scrolling with requestAnimationFrame and easeInOutCubic.
 * Temporarily disables CSS scrollBehavior during animation to prevent frame conflicts,
 * guaranteeing a fluid, 60fps/120fps deceleration glide on all browsers and devices.
 */
export function smoothScrollTo(
  target: string | HTMLElement,
  offset = 80,
  duration = 750
): void {
  const element =
    typeof target === 'string' ? document.querySelector(target) : target;
  if (!element) return;

  const startY =
    window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  const targetY = element.getBoundingClientRect().top + startY - offset;
  const distance = targetY - startY;

  // Already at target position
  if (Math.abs(distance) < 3) return;

  // Temporarily disable CSS smooth behavior so browser doesn't fight rAF updates
  const originalBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';

  let startTime: number | null = null;

  // easeInOutCubic for a refined, premium deceleration feel
  const easeInOutCubic = (t: number): number =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  function step(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, Math.round(startY + distance * ease));

    if (timeElapsed < duration) {
      requestAnimationFrame(step);
    } else {
      // Animation completed, restore original behavior
      document.documentElement.style.scrollBehavior = originalBehavior;
    }
  }

  requestAnimationFrame(step);
}
