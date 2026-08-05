import { ref } from 'vue';
export function useAsyncState<T>(promise: Promise<T>, initialState: T) {
  const state = ref<T>(initialState);
  const isReady = ref(false);
  const isLoading = ref(true);
  promise.then(v => {
    state.value = v as any;
    isReady.value = true;
  }).finally(() => {
    isLoading.value = false;
  });
  return { state, isReady, isLoading };
}
export function useFetch(url: string) {
  const data = ref(null);
  const error = ref(null);
  fetch(url).then(res => res.json()).then(json => (data.value = json)).catch(err => (error.value = err));
  return { data, error };
}
