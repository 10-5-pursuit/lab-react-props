function Progress({ totalDonations, targetAmount }) {
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${totalDonations}</span> of
        <span className="secondary">${targetAmount}</span>
      </h2>
    </section>
  );
}

export default Progress;