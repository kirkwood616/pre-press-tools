import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
interface Props {
  index: number;
}

function AltTemplateInput({ index }: Props) {
  const { draftRecord, setIsAltTemplate } = useImagingDraftStore();

  return (
    <input
      type="checkbox"
      name="altTemplate"
      id="altTemplate"
      checked={draftRecord.setups[index].isAltTemplate}
      onChange={() => setIsAltTemplate(index)}
    />
  );
}

export default AltTemplateInput;
