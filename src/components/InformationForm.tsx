import Form from '../components/ui/Form';
import logo from '../assets/logo.svg';
import ContactInfo from '../components/ui/ContactInfo';
import TeamUI from '../components/ui/TeamUI';
import FactsUI from '../components/ui/FactsUI';

const InformationForm = () => {
  return (
    <main className="pt-0 pb-16">
      <div className="grid grid-cols-2 gap-x-6 items-center">
        <div className="space-y-7">
          <img
            src={logo}
            alt="Mount Glory"
            className="size-48 object-contain"
          />
          <div className="flex items-end justify-between gap-6">
            <div>
              <h4 className="text-2xl font-semibold">Mount Glory School</h4>
              <p className="mt-2 max-w-xs text-sm">
                We believe in a familiar and joyful learning process. We ensure
                that your kid will get the best guardianship.
              </p>
              <ContactInfo />
            </div>
            <div className="flex flex-col">
              <div className="size-full h-auto min-h-40 max-w-xs">
                <TeamUI />
              </div>
            </div>
          </div>
          <FactsUI />
        </div>
        <Form />
      </div>
    </main>
  );
};

export default InformationForm;
