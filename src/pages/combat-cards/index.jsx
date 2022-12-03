import * as S from "./styled.js";
import images from "./../../styles/images.js";

import Button from "./../../components/button";
import Quote from "./../../components/quote";

const CombatCards = () => {
  const handleSubmit = () => {};
  return (
    <S.Wrapper>
      <Quote text={"Combat Cards"} />
      <S.Text>
        Add your character's combat abilities here and we will provide a
        printable pdf with each avaliable action in concise blocks that can be
        cutout and placed over cards in standard-size card game sleeves.
      </S.Text>
      <S.Text>
        If possible, the cards should be placed into different coloured sleeves
        depending on when the ability recharges, and they can be discarded into
        a pile until the next rest/recharge.
      </S.Text>
      <S.Image
        src={images["CombatCards"]}
        alt={images["CombatCards"]}
        height={300}
      />
      <Button value="Create some cards" handleSubmit={handleSubmit} />
    </S.Wrapper>
  );
};

export default CombatCards;
