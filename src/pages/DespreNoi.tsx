import Faq from "../components/about-us/Faq";
import Moments from "../components/about-us/Moments";

const DespreNoi = () => {
  return (
    <section className="py-20">
      <div className="fluid-container">
        <p className="text-center font-medium">
          CARMEZ este un nume de referință în industria cărnii din Republica
          Moldova. Cu o tradiție care începe în urmă cu peste 25 de ani,
          producem și livrăm produse din carne proaspete și procesate care
          respectă cele mai înalte standarde de calitate.
          <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt.
        </p>
        <Moments />
        <Faq />
      </div>
    </section>
  );
};

export default DespreNoi;
