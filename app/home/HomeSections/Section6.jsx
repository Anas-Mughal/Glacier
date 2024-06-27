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
      <table className="border-collapse bg-[#ffffff1c] backdrop-blur-lg rounded-[0.75vw] table-auto overflow-hidden border border-[#ffffff24] w-full max-[950px]:w-[90dvw]">
        <tbody>
          <tr>
            <th className="w-[20.052vw] h-[3.125vw] border-t border-r border-[#ffffff24] px-4 py-2">
              <p className="text-left text-nowrap text-primary pl-[12.5%]">Phone:</p>
            </th>
            <td className="w-[20.052vw] h-[3.125vw] border-t border-l border-[#ffffff24] px-4 py-2">
              <p className="pwrap">0300 - XXXXXXX</p>
            </td>
          </tr>
          <tr>
            <th className="w-[20.052vw] h-[3.125vw] border-t border-r border-[#ffffff24] px-4 py-2">
              <p className="text-left text-nowrap text-primary pl-[12.5%]">Phone 2:</p>
            </th>
            <td className="w-[20.052vw] h-[3.125vw] border-t border-l border-[#ffffff24] px-4 py-2">
              <p className="pwrap">0300 - XXXXXXX</p>
            </td>
          </tr>
          <tr>
            <th className="w-[20.052vw] h-[3.125vw] border-t border-r border-[#ffffff24] px-4 py-2">
              <p className="text-left text-nowrap text-primary pl-[12.5%]">Address:</p>
            </th>
            <td className="w-[20.052vw] h-[3.125vw] border-t border-l border-[#ffffff24] px-4 py-2">
              <p className="pwrap"> Main Road X, Walton, Lahore Main Road X, </p>
            </td>
          </tr>
          <tr>
            <th className="w-[20.052vw] h-[3.125vw] border-t border-r border-[#ffffff24] px-4 py-2">
              <p className="text-left text-nowrap text-primary pl-[12.5%]">Email:</p>
            </th>
            <td className="w-[20.052vw] h-[3.125vw] border-t border-l border-[#ffffff24] px-4 py-2">
              <p className="pwrap">example@gmail.com</p>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Section6;
