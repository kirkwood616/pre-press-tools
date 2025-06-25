import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
interface Props {
  index: number;
}

function ArtFileInput({ index }: Props) {
  const { draftRecord, setArtFile } = useImagingDraftStore();

  return (
    <input
      type="text"
      name="artFileInput"
      id="artFileInput"
      value={draftRecord.setups[index].artFile}
      onChange={(e) => setArtFile(e.target.value, index)}
    />
  );
}

export default ArtFileInput;
