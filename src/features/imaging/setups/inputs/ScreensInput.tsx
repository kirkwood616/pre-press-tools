import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
interface Props {
  index: number;
}

function ScreensInput({ index }: Props) {
  const { draftRecord, setScreenCount } = useImagingDraftStore();

  return (
    <input
      type="number"
      name="screensNumber"
      id="screensNumber"
      min="0"
      max="25"
      value={Number(draftRecord.setups[index].screens).toString()}
      onChange={(e) => setScreenCount(Number(e.target.value), index)}
    />
  );
}

export default ScreensInput;
