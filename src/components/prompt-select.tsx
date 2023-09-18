import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useFetchPrompts } from '@/hooks/useFetchPrompts';

type PromptSelectedProps = {
  onPromptSelected: (template: string) => void;
};

export function PromptSelect(props: PromptSelectedProps) {
  const prompts = useFetchPrompts();

  function handlePromptSelected(promptId: string) {
    const selectedPrompt = prompts?.find((prompt) => prompt.id === promptId);

    if (!selectedPrompt) {
      return;
    }

    props.onPromptSelected(selectedPrompt.template);
  }

  const renderSelectItems = () =>
    prompts?.map((prompt) => (
      <SelectItem key={prompt.id} value={prompt.id}>
        {prompt.title}
      </SelectItem>
    ));

  return (
    <Select onValueChange={handlePromptSelected}>
      <SelectTrigger>
        <SelectValue placeholder='Selecione um prompt...' />
      </SelectTrigger>
      <SelectContent>{renderSelectItems()}</SelectContent>
    </Select>
  );
}
