import { ref, watch } from 'vue';
export function useLocalStorage(key: string, initialValue: string) {
  const data = ref(localStorage.getItem(key) ?? initialValue);
  watch(data, (newVal) => localStorage.setItem(key, newVal));
  return data;
}
export function useSessionStorage(key: string, initialValue: string) {
  const data = ref(sessionStorage.getItem(key) ?? initialValue);
  watch(data, (newVal) => sessionStorage.setItem(key, newVal));
  return data;
}
