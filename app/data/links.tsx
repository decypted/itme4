import Link from "next/link";

interface LinksSectionProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinksNav = {
  links: ['Company', 'Mission', 'Careers', 'Investor'],
};

const LinksSection: React.FC<LinksSectionProps> = ({ setIsOpen }) => {
  return (
    <div className='w-[100%] mx-auto py-15 md:py-0 '>
      <div className="md:flex md:items-center md:gap-5">
        <div className='text-md font-normal md:flex md:items-center md:gap-5'>
          {LinksNav.links.map((link, index) => {
            // Replace spaces with hyphens or underscores for the URL
            const urlFriendlyLink = link.replace(/\s+/g, '-').toLowerCase();

            return (
              <div key={index} className="md:border-none border-solid border-white/10  border-t-[1px] border-b-[1px] py-3">
                <p>
                  <Link href={`/${urlFriendlyLink}`} className="text-sm hover:underline text-black" onClick={() => setIsOpen && setIsOpen(false)}>
                    {link}
                  </Link>
                  {index < LinksNav.links.length - 1}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LinksSection;
