function AboutMap() {
  return (
    <section className="flex items-center justify-between  flex-col gap-[2.5vw]">
      <h1>
        OUR <span className="text-primary">LOCATION</span>
      </h1>
      <div className="rounded w-[56.25vw] h-[36.458vw]">
        <iframe
          title="Glacier Finest Drinking Water Filtration Plant Location"
          className="size-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850.6688302639036!2d74.35808606961798!3d31.478116442137104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919052bd6527e73%3A0x4c0867c2a70da3ba!2sBLUE%20WAVES%20RO%20Water%20filtration%20Plant!5e0!3m2!1sen!2s!4v1717641439920!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default AboutMap;
