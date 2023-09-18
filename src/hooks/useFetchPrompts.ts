import { api } from '@/lib/axios';
import { useEffect, useState } from 'react';

type Prompts = {
  id: string;
  title: string;
  template: string;
};

export function useFetchPrompts() {
  const [prompts, setPrompts] = useState<Prompts[] | null>(null);

  useEffect(() => {
    api.get('/prompts').then((response) => {
      setPrompts(response.data);
    });
  }, []);

  return prompts;
}
