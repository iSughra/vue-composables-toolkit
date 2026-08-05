import { ref, onMounted, onUnmounted } from 'vue';
export function useWindowSize() {
  const width = ref(0);
  const height = ref(0);
  const update = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };
  onMounted(() => {
    update();
    window.addEventListener('resize', update);
  });
  onUnmounted(() => window.removeEventListener('resize', update));
  return { width, height };
}
export function useEventListener(target: EventTarget | null | undefined, event: string, listener: EventListenerOrEventListenerObject) {
  onMounted(() => target?.addEventListener(event, listener));
  onUnmounted(() => target?.removeEventListener(event, listener));
}
export function useIntersectionObserver(target: HTMLElement | null, callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
  let observer: IntersectionObserver | null = null;
  onMounted(() => {
    if (target) {
      observer = new IntersectionObserver(callback, options);
      observer.observe(target);
    }
  });
  onUnmounted(() => observer?.disconnect());
}
