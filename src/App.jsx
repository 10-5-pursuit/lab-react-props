import DonationForm from "./Components/DonationForm/DonationForm";
import Progress from "./Components/Progress/Progress";
import RecentDonations from "./Components/RecentDonations/RecentDonations";
import TopBar from "./Components/TopBar/TopBar";
import "./App.css";

const targetAmount = 1000;
const donations = [
  {
    amount: 250,
    caption: "You really need this. Really.",
    id: 1,
    name: "Jo",
  },
  {
    amount: 30,
    caption: "Here, take a break from work!",
    id: 2,
    name: "Rami",
  },
  {
    amount: 20,
    caption: "LOL! You are too funny. Happy to do this for you. :)",
    id: 3,
    name: "Michelle",
  },
  {
    amount: 5,
    caption: "Have fun!",
    id: 4,
    name: "Malinda",
  },
  {
    amount: 30,
    caption: "Come visit me in Miami!",
    id: 5,
    name: "Sam",
  },
];

const totalDonations = donations.reduce(
  (total, donation) => total + donation.amount,
  0
);

function App() {
  return (
    <>
      <TopBar />
      <main className="container">
        <section className="sidebar">
          <RecentDonations donations={donations} />
        </section>
        <section className="">
          <Progress
            totalDonations={totalDonations}
            targetAmount={targetAmount}
          />
          <DonationForm donationCount={donations.length} />
        </section>
      </main>
    </>
  );
}

export default App;
