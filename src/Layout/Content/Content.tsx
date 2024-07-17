const Content: React.FC = () => {
  return (
    // <div
    //   id="content"
    //   className="col-span-7 bg-white-600 h-[calc(80vh-3.75rem)] p-4 "
    // >
    //   Content Part
    // </div>
    // <div className="flex flex-col col-span-7 items-center justify-center h-[calc(80vh-3.75rem)]">
    //   <div className="bg-white-600 p-4 rounded-xl text-center">
    //     <p className="text-xl">
    //       Enthusiastic, self-motivated, reliable, responsible, and hard-working
    //       person. Dynamic Software Engineer with a passion for innovation and
    //       expertise in software development solutions.
    //     </p>
    //   </div>
    //   <button className="bg-black text-white px-6 py-3 mt-4 rounded-full shadow-md">
    //     Download CV
    //   </button>
    // </div>

    <div className="flex flex-col col-span-7 items-center justify-center h-[calc(80vh-3.75rem)]">
      <div className="bg-white-600 p-4 rounded-xl text-center">
        <p className="text-4xl">Expertise in software development solutions.</p>
      </div>
      <button className="bg-black text-white px-6 py-5 mt-4 rounded-full shadow-md">
        Download CV
      </button>
    </div>
  );
};

export default Content;
