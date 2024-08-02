const Section = (props) => {
  const { children, id, ariaLabel } = props;

  return (
    <section
      aria-label={ariaLabel}
      id={id}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-30 lg:scroll-mt-24"
    >
      {children}
    </section>
  );
};

export default Section;
