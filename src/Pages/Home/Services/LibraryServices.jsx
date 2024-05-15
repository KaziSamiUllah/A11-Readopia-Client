const LibraryServices = () => {
  const services = [
    {
      name: "Book Borrowing",
      description:
        "The primary service offered by libraries, allowing patrons to borrow books for a certain period.",
    },
    {
      name: "Interlibrary Loan (ILL)",
      description:
        "This service enables patrons to borrow books or obtain photocopies of articles that are not available in their local library's collection, by requesting them from other libraries.",
    },
    {
      name: "Reference Services",
      description:
        "Librarians provide assistance in finding information, conducting research, and answering questions on a wide range of topics.",
    },
    {
      name: "Digital Resources",
      description:
        "Access to electronic databases, e-books, e-journals, and other digital resources, either on-site or remotely.",
    },
    {
      name: "Computer and Internet Access",
      description:
        "Many libraries offer public access computers and free internet access for patrons.",
    },
    {
      name: "Children's Services",
      description:
        "Programs, activities, and materials tailored for children, including storytime sessions, educational programs, and age-appropriate book collections.",
    },
    {
      name: "Teen Services",
      description:
        "Similar to children's services but tailored for teenagers, including study spaces, book clubs, and events.",
    },
    {
      name: "Special Collections",
      description:
        "Libraries often have special collections of rare books, manuscripts, archives, maps, and other unique materials that require special handling and may be available for research purposes.",
    },
    {
      name: "Language Learning Resources",
      description:
        "Books, audiovisual materials, and language learning software to assist patrons in learning foreign languages.",
    },
    {
      name: "Assistive Services",
      description:
        "Services and materials for patrons with disabilities, including large print books, audio books, and assistive technology.",
    },
    {
      name: "Community Outreach",
      description:
        "Libraries engage with the local community through outreach programs, partnerships with schools and other organizations, and participation in community events.",
    },
    {
      name: "Meeting Spaces",
      description:
        "Some libraries provide meeting rooms or spaces that can be reserved by community groups, non-profits, or individuals for meetings, study groups, or events.",
    },
    {
      name: "Printing, Copying, and Scanning",
      description:
        "Facilities for patrons to print, copy, and scan documents, often for a small fee.",
    },
    {
      name: "Home Delivery Service",
      description:
        "In some areas, libraries offer a home delivery service for patrons who are unable to visit the library due to mobility issues or other reasons.",
    },
  ];

  return (
    <div className="bg-center bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/72/NYC_-_New_York_City_Library_-_1723.jpg')] bg-cover border-2 rounded-2xl">
      <div className="bg-black rounded-2xl bg-opacity-20 p-10 text-white">
      <h1 className="text-4xl font-bold text-center mb-5 text-white">Our services</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="bg-opacity-60 p-4 shadow-lg shadow-black rounded-md bg-black drop-shadow-lg hover:border-2 hover:bg-opacity-70">
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            <p className="text-sm ">{service.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default LibraryServices;
