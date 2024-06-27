function Section6() {
  return (
    <section className="flex flex-col items-center justify-center gap-[2.5vw]">
      <style>{`
            .pwrap {
              white-space: nowrap;
            }
          @media (max-width: 950px) {
            .pwrap {
              white-space: normal;
            }
          }
        `}</style>
      <h1>
        CONTACT <span className="text-primary">INFO</span>
      </h1>
      <table className="border-collapse bg-[#ffffff1c] backdrop-blur-lg rounded-[0.75vw] table-auto overflow-hidden border border-[#ffffff24]">
        <tbody>
          <tr>
            <td className="w-[20.052vw] h-[3.125vw] border-t border-r border-[#ffffff24] px-4 py-2">
              <p className="text-nowrap">
                <span className="text-primary">Phone:</span> &nbsp;&nbsp; 0300 -
                XXXXXXX
              </p>
            </td>
            <td className="w-[20.052vw] h-[3.125vw] border-t border-l border-[#ffffff24] px-4 py-2">
              <p className="pwrap">
                <span className="text-primary">Address:</span> Main Road X,
                Walton, Lahore
              </p>
            </td>
          </tr>
          <tr>
            <td className="w-[20.052vw] h-[3.125vw] border-t border-r border-[#ffffff24] px-4 py-2">
              <p className="text-nowrap">
                <span className="text-primary">Phone 2:</span> 0300 - XXXXXXX
              </p>
            </td>
            <td className="w-[20.052vw] h-[3.125vw] border-t border-l border-[#ffffff24] px-4 py-2">
              <p className="text-nowrap">
                <span className="text-primary">Email:</span> example@gmail.com
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Section6;
