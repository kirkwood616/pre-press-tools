import ButtonArrow from "@/components/ui/buttons/ButtonArrow";
import ButtonCloseX from "@/components/ui/buttons/ButtonCloseX";
import AltTemplateInput from "@/features/imaging/setups/inputs/AltTemplateInput";
import ArtFileInput from "@/features/imaging/setups/inputs/ArtFileInput";
import FilmInput from "@/features/imaging/setups/inputs/FilmInput";
import ScreensInput from "@/features/imaging/setups/inputs/ScreensInput";
import SetupInput from "@/features/imaging/setups/inputs/SetupInput";
import { useImagingDraftStore } from "@/stores/imaging/useImagingDraftStore";
import { useImagingOrderStore } from "@/stores/imaging/useImagingOrderStore";
import styles from "./ImagingSetups.module.css";

function SetupsEdit() {
  const { order } = useImagingOrderStore();
  const { draftRecord, deleteSetup, moveSetupForward, moveSetupBack } =
    useImagingDraftStore();

  return (
    <>
      {draftRecord.setups.map((setup, index) => (
        <tr
          className={setup.isFilm ? styles.film : styles.cts}
          key={order!.order + "_" + index.toString()}
        >
          <td>
            <ButtonCloseX clickFunction={() => deleteSetup(index)} />
          </td>
          <td>
            {draftRecord.setups[index].isFilm ? (
              draftRecord.setups[index].setup.toString().toUpperCase()
            ) : (
              <SetupInput index={index} />
            )}
          </td>
          <td>
            <FilmInput index={index} />
          </td>
          <td className={styles.artFile}>
            <ArtFileInput index={index} />
          </td>
          <td>
            <ScreensInput index={index} />
          </td>
          <td>
            <AltTemplateInput index={index} />
          </td>
          <td>
            <ButtonArrow
              direction="down"
              index={index}
              clickFunction={moveSetupBack}
            />
            <ButtonArrow
              direction="up"
              index={index}
              clickFunction={moveSetupForward}
            />
          </td>
        </tr>
      ))}
    </>
  );
}

export default SetupsEdit;
