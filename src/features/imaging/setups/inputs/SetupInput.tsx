import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
interface Props {
  index: number;
}

function SetupInput({ index }: Props) {
  const { draftRecord, setSetupNumber } = useImagingDraftStore();

  return (
    <input
      type="number"
      name="setupNumber"
      id="setupNumber"
      min="1"
      value={Number(draftRecord.setups[index].setup).toString()}
      onChange={(e) => setSetupNumber(e.target.value, index)}
    />
  );
}

export default SetupInput;
