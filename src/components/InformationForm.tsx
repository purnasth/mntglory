import Form from '../components/ui/Form';
import logo from '../assets/logo.webp';
import ContactInfo from '../components/ui/ContactInfo';
import TeamUI from '../components/ui/TeamUI';
import FactsUI from '../components/ui/FactsUI';

const InformationForm = () => {
  return (
    <main className="pb-16 pt-0">
      <div className="grid grid-cols-1 items-center gap-y-6 lg:gap-x-6 lg:gap-y-0 lg:grid-cols-2">
        <div className="space-y-7">
          <img
            src={logo}
            alt="Mount Glory"
            className="size-32 md:size-48 object-contain"
          />
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h4 className="text-2xl font-medium">Mount Glory School</h4>
              <p className="mt-2 max-w-xs text-sm">
                We believe in a familiar and joyful learning process. We ensure
                that your kid will get the best guardianship.
              </p>
              <ContactInfo />
            </div>
            <div className="size-full h-auto min-h-40 max-w-xs">
              <TeamUI />
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
