import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
interface Props {
  index: number;
}

function FilmInput({ index }: Props) {
  const { draftRecord, setIsFilm } = useImagingDraftStore();

  return (
    <input
      type="checkbox"
      name="filmCheck"
      id="filmCheck"
      checked={draftRecord.setups[index].isFilm}
      onChange={() => setIsFilm(index)}
    />
  );
}

export default FilmInput;
