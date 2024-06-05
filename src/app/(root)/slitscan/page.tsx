import { PROJECT_URL } from '../../../../shared';
import ImageSlide from '../../_components/image-slide';

export default function SlitscanPage() {
  return (
    <>
      <ImageSlide numOfImages={7} path={`${PROJECT_URL}/slitscan/amorphous_body_ekezia_slitscan`} />
    </>
  );
}
